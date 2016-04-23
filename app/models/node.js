// Example model


module.exports = function (sequelize, DataTypes) {

  var Node = sequelize.define('Node', {
    identifier: DataTypes.STRING,
    key: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Node.hasMany(models.Comments);
        Node.hasMany(models.Record)
      }
    }
  });

  return Node;
};

