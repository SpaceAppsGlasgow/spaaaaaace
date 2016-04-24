var express = require('express'),
  router = express.Router(),
  db = require('../models'),
  request = require("request");


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

router.get('/node/:identifier', function(req, res, next){
	var identifier = req.params.identifier;
	db.Node.findOne({where: {identifier: identifier}}).then((node) => {
		db.Record.findAll({where: {NodeId: node.id}}).then((records) => {
			res.render("node_view.swig", {node: node, records: records})
		})
	})

})

router.post('/node/:identifier/data.json', function(req, res, next){
	var identifier = req.params.identifier;
	var data = req.body.d;
	console.log(identifier, data)
	db.Node.findOne({where: {identifier: identifier}}).then((node) => {
		try {
			var dataParsed = JSON.parse(data);
		
			if (node != null) {
				db.Record.create({data: data}).then((record) => {
					record.setNode(node);
					res.send({"data": JSON.parse(data), "time": record.createdAt})
				})
			} else {
				res.send({"error": "Device "+identifier+" does not exist"})
			}
		} catch (e) {
			res.send({"error":"Data not in JSON format"})
		}
	})

})