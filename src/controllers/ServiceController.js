const User = require('../models/User');
const Service = require('../models/Service');
const Category = require('../models/Category');


module.exports = {
    async index(req, res) {
        const services = await Service.findAll();
 
         return res.json(services); 
     },

    async listServiceForUser(req, res){
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'services' }
        });

        return res.json(user);

    },
    async listServiceForCategory(req, res){
        const { category_id } = req.params;

        const category = await Category.findByPk(category_id, {
            include: { association: 'categories' }
        });

        return res.json(category);

    },

    async store(req,res){
        const { user_id } = req.params;
        const { category_id } = req.body;
        const { title, description, eventdate, phone, address } = req.body;

        const user = await User.findByPk(user_id);
        const category = await Category.findByPk(category_id);

        if(!user) {
            return res.status(400).json({ error: 'User no found' });
        }
        else if(!category) {
            return res.status(400).json({ error: 'Category no found' });
        }
       

        const service =  await Service.create({
            title,
            description,
            eventdate,
            phone,
            address,
            user_id,
            category_id
            
        });

        return res.json(service);
    }
};