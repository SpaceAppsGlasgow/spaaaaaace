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
    db: 'mysql://localhost/vagrant-development'
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
  }
};

module.exports = config[env];
