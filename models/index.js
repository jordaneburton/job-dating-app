const router = require('express').Router();
const User = require('./user.js');
const Jobs = require('./jobs.js');
const Profile = require('./profile.js');

const Favorite = require('./Favorite.js');

User.belongsToMany(Jobs, {
    through: Favorite,
    as: 'jobs',
    foreignKey: "user_id"
})

Jobs.belongsToMany(User, {
    through: Favorite,
    as: 'user',
    foreignKey: "jobs_id"
})

User.belongsTo(Profile, {
    as:'user_profile',
    foreignKey: "user_id"
})


Profile.belongsTo(User, {
    foreignKey:"user_id"
})


User.hasOne(Profile, {
    foreignKey:"user_id"
})

module.exports = { User, Jobs, Favorite, Profile };


