// Example model


module.exports = function (sequelize, DataTypes) {

  var Record = sequelize.define('Record', {
    data: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Record.hasMany(models.Comments);
        Record.belongsTo(models.Node)
      }
    }
  });

  return Record;
};

