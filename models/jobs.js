const { Model, DataTypes } = require('sequelize');
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
    },
  location: {
    type: DataTypes.STRING
},
    salary: {
        type: DataTypes.INTEGER
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