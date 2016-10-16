var mongoose = require('mongoose');  
var Schema = mongoose.Schema;

var autorSchema = new Schema({ 
    autor: String,  
    orden: String,
    lote: String,
    SKU: String,
    piezas: String,
    completadas:String,
    fecha: String,
    hora:String
});

module.exports = mongoose.model('orden', autorSchema); 