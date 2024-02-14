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

    getProfile: async (req, res) => {
        try {
            // Get all projects and JOIN with user data
            const userData = await User.findByPk(req.params.id);
        
            // Serialize data so the template can read it
            const user = userData.get({ plain: true });
        
            return res.render('profile', {
                // attributes: { exclude: ['password'] }
                user: user     // ONLY ONE OF THESE SHOULD BE USED
            });
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

    getSavedJobs: async (req, res) => {
        try {
            return res.render('savedJobs', {
                logged_in: req.session.logged_in 
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },
}