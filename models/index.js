const router = require('express').Router();

const User = require('./user.js');
const Jobs = require('./jobs.js');

const Favorite = ('./Favorite.js')

Favorite.hasMany(User, {
    through:Jobs,
    foreignKey:'jobs_id' 
})
 Favorite.hasMany(Jobs, {
    through: Jobs,
    foreignKey: 'jobs_id',
 })


 Favorite.hasMany( User, {
    through:Jobs,
    foreignKey: 'user_id'
 })

 User.hasOne(Favorite, {
    through:Favorite,
    foreignKey:'favorite_id'
 })
  
User.hasMany(Jobs, {
    through: Favorite,
    foreignKey: 'jobs_id'
});











  
  module.exports = { User, Jobs, Favorite };
  
