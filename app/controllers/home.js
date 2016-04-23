var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  db.Node.findAll().then(function (nodes) {
    res.render('index', {
      title: 'Spaaace',
      nodes: nodes
    });
  });
});


router.get('/add', function (req, res, next) {
    res.render('add', {
      title: 'Spaaace'
    });
  });

router.post('/add', function (req, res, next) {
	var identifier = req.body.identifier
	var key = req.body.key
	db.Node.findOrCreate({where: {identifier: identifier}, defaults: {key: key}}).spread((node,created) => {
		console.log(node, created)
	
		console.log(identifier, key);
		 res.render('add', {
	      title: 'Spaaace',
	      created: created,
	      message: (created) ? "Device "+identifier+" created successfully" : "Device "+identifier+" already exists"
	    });
	}).error((err) => {
		res.send("Error")
	})
   
});


router.get('/list', function (req, res, next) {
  db.Node.findAll().then(function (nodes) {
    res.render('index', {
      title: 'Spaaace',
      nodes: nodes
    });
  });
});