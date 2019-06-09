var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mongoose = require('mongoose');
var Gastos = mongoose.model('Gastos');

//GET metodo para listar gastos
router.get('/gasto', function(req, res, next){
  Gastos.find(function(err, gastos){
      if(err){return next(err)}
      
      res.json(gastos)
  })
})

//POST - Agregar gasto
router.post('/gasto', function(req, res, next){
  var gasto = new Gastos(req.body);
  
  gasto.save(function(err, gasto){
      if(err){ return next(err)}
          res.json(gasto);
  })
})

//PUT - Actualizar gasto
router.put('/gasto/:id', function(req, res){
  Gastos.findById(req.params.id, function(err, gasto){
      gasto.nombre = req.body.nombre;
      gasto.prioridad = req.body.prioridad;
      
      gasto.save(function(err){
          if(err){res.send(err)}
          
          res.json(gasto);
      })
  })
})

//DELETE - Eliminar gasto

router.delete('/gasto/:id', function(req, res){
  Gastos.findByIdAndRemove(req.params.id, function(err){
      if(err){res.send(err)}
          res.json({message: 'La gasto se ha eliminado'});
  })
})
module.exports = router;
