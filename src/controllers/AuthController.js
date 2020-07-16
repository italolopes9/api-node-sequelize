const User = require('../models/User');
const jwt = require('jsonwebtoken');
require("dotenv-safe").config();

module.exports = {

    async login(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({email, password });


        if (email != user.email  ||  password != user.password) {
            return res.status(400).send({ error: 'Usuário  não encontrado' });
        }

        const token = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 86400
        });

        res.send({ user, token });
    }
};