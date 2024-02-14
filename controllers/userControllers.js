const { User } = require('../models/')

module.exports = {
    getFunc: async (req, res) => {
        try {
            // Get all users, sorted by name
            const userData = await User.findAll({
                attributes: { exclude: ['password'] },
                order: [['name', 'ASC']],
            });

            // Serialize user data so templates can read it
            const users = userData.map((project) => project.get({ plain: true }));

            // Pass serialized data into Handlebars.js template
            res.render('homepage', { users });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    postFunc: async (req, res) => {
        try {
            const userData = await User.create({
                user_name: req.body.user_name,
                email: req.body.email,
                password: req.body.password,
            });

            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;
            res.status(200).json({ userData })
            })
        } catch (err) {
            res.status(500).json(err);
        }
    },

    loginFunc: async (req, res) => {
        try {
          const userData = await User.findOne(
            {
                where:
                {
                    email: req.body.email
                }
            });
     
          if (!userData) {
            
             res.status(400).json({ message: 'Incorrect email or password, please try again' });

          }
     
          const validPassword = await userData.checkPassword(req.body.password);
     
          if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
          }
     
          req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
           
            res.json({ user: userData, message: 'You are now logged in!' });
          });
     
        } catch (err) {
          res.status(400).json(err);
        }
      }
 
}