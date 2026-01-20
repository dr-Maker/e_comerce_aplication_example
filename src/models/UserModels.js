var mongoose = require("mongoose");

var schema = mongoose.Schema;

var UserSchema = new schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    rol : {type: String, enum: ['user', 'admin'], default: 'user'}      
});

module.exports = mongoose.model("Users", UserSchema);