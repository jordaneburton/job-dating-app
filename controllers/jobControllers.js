const { Job } = require('../models/jobs')

//pass to homepage
module.exports = {
    getFunc: async (req, res) => {
        try {
            const jobs = await Job.findAll();
            res.status(200).json({ message: 'SUCCESS: GET connected to jobRoutes', jobs })
        } catch (err) {
            res.status(404).json(err);
        }
    },
    postFunc: async (req, res) => {
        try {
            Job.create(req.body)
                .then(newJob => res.json(newJob))
            res.status(200).json({ message: 'SUCCESS: POST connected to jobRoutes' })
        } catch (err) {
            res.status(400).json(err);
        }
    },
    //id
    deleteFunc: async (req, res) => {
        Job.destroy({
            where: 
            {
                id: req.params.id
            }
        })
        .then(deletedJob => {
            if(!deletedJob) {
                res.status(400).json({ message: "Could not delete job"});
                return;
            };
            res.json(deletedJob);
        })
        .catch(err => res.status(500).json(err));
    }
}