const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection');


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

    avatar : {
        type: DataTypes.STRING
      
      
    },
    category_name : {
      type:DataTypes.STRINGSTRING,
      allowNull: false
    },
    
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Jobs',
  }
);








module.exports = Jobs;