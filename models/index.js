const router = require('express').Router();
const User = require('./user.js');
const Jobs = require('./jobs.js');
const Profile = require('./profile.js');

const Favorite = ('./Favorite.js')




  
 
 

User.belongsToMany(Jobs, {
    through: Favorite,
    as: 'user_jobs',
    foreignKey: "user_id"
})

Jobs.belongsToMany(User, {
    through: {
        model: Favorite,
        unique: false
    },
    as: 'favorited_by'
})

User.belongsTo(Profile, {
  
    as:'user_profile',
    foreignKey: "user_id"
})


Profile.hasOne(User, {
   
    as: 'profile_data',
    foreignKey: "profile_id"
})


module.exports = { User, Jobs, Favorite, Profile };
  




