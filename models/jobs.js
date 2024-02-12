const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connections');


class Jobs extends Model {}

Jobs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false
    },
  location: {
    type: DataTypes.STRING,
    allowNull:false
},
    salary: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    
    category_name : {
      type:DataTypes.STRING,
      allowNull: false
    },
    
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'jobs',
  }
);








module.exports = Jobs;