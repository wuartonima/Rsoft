var mongoose = require('mongoose');  
var Schema = mongoose.Schema;

var autorSchema = new Schema({  
    nombre: String,
    hora: String,
    fecha: String,
    puesto: String
});

module.exports = mongoose.model('hisuser', autorSchema); 