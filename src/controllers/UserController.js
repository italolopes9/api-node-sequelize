const User = require('../models/User');
module.exports = {
    async index(req, res) {
       const users = await User.findAll();

        return res.json(users); 
    },

    async store(req, res) {
        const { name, email, password } = req.body;

        const user = await User.create({ name, email, password });

        return res.json(user);
    },

    async deleteForId(req, res) {
        const { id } = req.params;

        const userId = await User.findByPk(id);
        
        if(!userId) {
            return res.status(400).json({ error: 'User not found' });
        }

        await User.destroy({ where: { id: id}});

        return res.send('User was deleted successfully!');
    },

    async deleteAll(req, res) {

        await User.destroy({
            where: {},
            truncate: false
        });

        return res.send('All Users was deleted successfully!');
    },

    async update(req, res) {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const userId = await User.findByPk(id);
        
        if(!userId) {
            return res.status(400).json({ error: 'User not found' });
        }

        await User.update(
            { name: name, email: email, password: password},
            { where: { id: id } }
        ); 

        return res.send('User was updated successfully!')
        
    },
    
    

};