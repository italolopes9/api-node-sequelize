const { Model, DataTypes } = require('sequelize');

class Service extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            eventdate: DataTypes.DATEONLY,
            phone: DataTypes.STRING,
            address: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'author' });
    }
    
}

module.exports = Service;