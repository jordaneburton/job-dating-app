const router = require('express').Router();

const User = require('./user.js');
const Jobs = require('./jobs.js');

const Favorite = ('./Favorite.js')

Favorite.hasMany(User, {
    through: Jobs,
    foreignKey: 'jobs_id' {
    model: Jobs,
    unique: false
},
    as: 'favorite_jobs'
})

User.hasMany(Jobs, {
    through: Favorite,
    foreignKey: 'jobs_id'
});

Jobs.belongsToMany(Category, {

    through: Favorite,
    foreignKey: 'category_id',

})

Category.belongsToMany(Jobs, {
    through: Favorite,
    foreignKey: 'category_id',

})


module.exports = { User, Jobs, Favorite };

