require('dotenv').config( { path: './.env' });
var express = require('express');

var app = express();
var port = process.env.PORT || 3002;

const connectDB = require('./config/mongo');

// 🔌 conectar a Mongo
connectDB();
var user_route = require('./routes/UserRoutes');

app.listen(port, ()=>{
    console.log(`Conectado al puerto ${port} `);
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Servidor activo 🚀');
});

app.use('/api', user_route);