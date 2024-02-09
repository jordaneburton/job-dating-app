module.exports = {
    getFunc: async (req, res) => {
        try {
            res.status(200).json({message: 'SUCCESS: GET connected to homeRoutes'})
        } catch (err) {
            res.status(500).json(err);
        }
    },
}