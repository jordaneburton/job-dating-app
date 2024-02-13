const router = require('express').Router();

const User = require('./user.js');
const Jobs = require('./jobs.js');

const Favorite = ('./Favorite.js')



  
 
 
User.belongsToMany(Jobs, {
    through:{
        model: Favorite,
        unique:false
    
    },
    as: 'user_jobs'
})

Jobs.belongsToMany(User, {
    through:{
        model: Favorite,
        unique:false
    },
    as:'favorited_by'
   
})











  
  module.exports = { User, Jobs, Favorite };
  
