const mongoose = require('mongoose');
require('dotenv').config( { path: '../env' });
const connectDB = async () => {
  try {


var DB_USER = process.env.DB_USER;
var DB_PASS = process.env.DB_PASS;
var DB_HOST = process.env.DB_HOST;
var DB_PORT = process.env.PORT_DB;
var DB_DATABASE = process.env.DB_DATABASE;

    var URL_DB_CONEXTION = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=${DB_DATABASE}`; 

    console.log(URL_DB_CONEXTION);
    await mongoose.connect(URL_DB_CONEXTION);

    console.log("✅ MongoDB conectado correctamente");

  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;