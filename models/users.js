module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   len: [1]
      // }
    }
  });

  // Users.associate = function (models) {
  //   Users.hasMany(models.Message, {as: 'UserMessages'}); //creates the getUserMessages and setUserMessages functions
  // }


  
  return User;
};
