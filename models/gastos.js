var mongoose = require('mongoose');

var GastosSchema = new mongoose.Schema({
   nombre: String,
   apellidos: String,
   fechaGasto: {type: Date, default: Date.now},
   monto: Number,
   tipoGasto: String
});

mongoose.model('Gastos', GastosSchema);