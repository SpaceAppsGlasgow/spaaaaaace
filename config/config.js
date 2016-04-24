var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'vagrant'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root@localhost/vagrant-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'vagrant'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/vagrant-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'vagrant'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/vagrant-production'
  },
	
	bluemix: {
		root: rootPath,
		app: { 
			name: 'spaaaaaace'
		},
		port: process.env.PORT || 80,
		db: 'mysql://bb09ff2240de96:a0fdbf41@us-cdbr-iron-east-03.cleardb.net:3306/ad_c94ef909b61acba?reconnect=true'
	}
};

module.exports = config[env];
