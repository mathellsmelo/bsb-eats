const { Model, DataTypes } = require('sequelize');

class Restaurant extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            thumbnail: DataTypes.STRING,
            delivery_tax: DataTypes.FLOAT
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Meal, { foreignKey: 'restaurant_id', as: 'restaurants' });
    }
}

module.exports = Restaurant;