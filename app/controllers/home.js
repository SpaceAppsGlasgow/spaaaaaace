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
    res.render('list', {
      title: 'Spaaace',
      nodes: nodes
    });
  });
});

router.post('/node/:identifier/data.json', function(req, res, next){
	var identifier = req.params.identifier;
	var data = req.body.d;
	console.log(identifier, data)
	db.Node.findOne({where: {identifier: identifier}}).then((node) => {
		if (node != null) {
			db.Record.create({data: data}).then((record) => {
				record.setNode(node);
				res.send({"data": data, "time": record.createdAt})

			})
		} else {
			res.send({"error": "Device "+identifier+" does not exist"})
		}

	})

})