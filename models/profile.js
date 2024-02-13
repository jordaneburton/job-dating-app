const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connections');


class Profile extends Model {}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    recent_job: {
      type: DataTypes.STRING,
      allowNull:false
    },
  location: {
    type: DataTypes.STRING,
    allowNull:false
},
    salary: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bio: {
        type: DataTypes.STRING,
        allowNull:false
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
    modelName: 'profile',
  }
);


module.exports = Profile;