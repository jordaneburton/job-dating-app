const router = require('express').Router();

const User = require('./user.js');
const Jobs = require('./jobs.js');
const Profile = require('./profile.js');

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

Profile.belongsToOne(User, {
    through:{
        model:Favorite,
        unique:false
    }
})











  
  module.exports = { User, Jobs, Favorite,Profile };
  
