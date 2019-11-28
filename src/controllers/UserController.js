const User = require('../models/User');

module.exports = {
    async search (req, res) {
        const { email } = req.params;

        const user = await User.findOne({ where: { email } });

        return res.json(user);
    },
    async store (req, res) {
        const { email, name } = req.body;

        const user = await User.create({ email, name });

        return res.json(user);
    },
};