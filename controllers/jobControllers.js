const { Job } = require('../models/user')

module.exports = {
    getFunc: async (req, res) => {
        try {
            res.status(200).json({message: 'SUCCESS: GET connected to jobRoutes'})
        } catch (err) {
            res.status(500).json(err);
        }
    },
    postFunc: async (req, res) => {
        try {
            res.status(200).json({message: 'SUCCESS: POST connected to jobRoutes'})
        } catch (err) {
            res.status(500).json(err);
        }
    },
}