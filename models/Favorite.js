const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


//
class Favorite extends Model {}

Favorite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

  


    
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'jobs',
  }
});



module.export = applications;