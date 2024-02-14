const User = require('../models/user');

module.exports = {
    getHome: async (req, res) => {
        try {
            return res.render('homepage', {
                logged_in: req.session.logged_in 
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getJobs: async (req, res) => {
        try {
            return res.render('jobs', {
                logged_in: req.session.logged_in 
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    putProfile: async (req, res) => {
        try {
            const userData = await Profile.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                recentJob: req.body.recentJob,
                category: req.body.category,
                salary: req.body.salary,
                bio: req.body.bio
            });
            
            console.log(userData);
            req.session.profile_created = true;
            res.status(200).json({ userData });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getLogin: async (req, res) => {
        try {
            return res.render('login', {
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },
}