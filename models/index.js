const router = require('express').Router();

const User = require('./User.js');
const Jobs = require('./Jobs.js');

const Favorite = ('./Favorite.js')

Favorite.belongsToMany(User, {
    through: {
        model: Jobs,
        unique: false
    },
    as: 'favorite_jobs'
})
  
User.belongsToMany(Jobs, {
    through: {
        model: User,
        unique:false
    },

    as:'user_jobs'

})

  
  module.exports = { User, Jobs, Favorite };
  
