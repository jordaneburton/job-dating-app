const router = require('express').Router();
const User = require('./user.js');
const Jobs = require('./jobs.js');
const Profile = require('./profile.js');

const Favorite = ('./Favorite.js')

User.belongsToMany(Jobs, {
    through: {
        model: Favorite,
        unique: false

    },
    as: 'user_jobs'
})

Jobs.belongsToMany(User, {
    through: {
        model: Favorite,
        unique: false
    },
    as: 'favorited_by'
})

User.belongsTo(Profile, {
    through:{
        model:Favorite,
        unique:false
    },
    as:'user_profile'
})


Profile.belongsTo(User, {
    foreignKey:"user_id"
})


User.hasOne(Profile, {
    foreignKey:"user_id"
})

module.exports = { User, Jobs, Favorite, Profile };


