const { User } = require('../models/user')

module.exports = {
    getFunc: async (req, res) => {
        try {
            // Get all users, sorted by name
            // const userData = await User.findAll({
            //   attributes: { exclude: ['password'] },
            //   order: [['name', 'ASC']],
            // });
        
            // Serialize user data so templates can read it
            // const users = userData.map((project) => project.get({ plain: true }));
        
            // Pass serialized data into Handlebars.js template
            // res.render('homepage', { users });
            res.status(200).json({message: 'SUCCESS: GET connected to userRoutes'})
        } catch (err) {
            res.status(500).json(err);
        }
    },
    postFunc: async (req, res) => {
        try {
            res.status(200).json({message: 'SUCCESS: POST connected to userRoutes'})
        } catch (err) {
            res.status(500).json(err);
        }
    },
}