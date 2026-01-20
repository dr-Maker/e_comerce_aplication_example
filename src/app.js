require('dotenv').config();
var express = require('express');

var app = express();
var port = process.env.PORT || 3002;

var user_route = require('./routes/UserRoutes');

app.listen(port, ()=>{
    console.log(`Conectado al puerto ${port} `);
})

app.get('/', (req, res) => {
  res.send('Servidor activo 🚀');
});

app.use('/api', user_route);