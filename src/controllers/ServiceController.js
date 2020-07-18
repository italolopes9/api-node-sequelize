const User = require('../models/User');
const Service = require('../models/Service');



module.exports = {
    async index(req, res){
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'services' }
        });

        return res.json(user);

    },

    async store(req,res){
        const { user_id } = req.params;
        const { title, description, eventdate, phone, address } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: 'User no found' });
        }

        const service =  await Service.create({
            title,
            description,
            eventdate,
            phone,
            address,
            user_id,
            
        });

        return res.json(service);
    }
};