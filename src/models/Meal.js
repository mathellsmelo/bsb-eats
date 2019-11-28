const { Model, DataTypes } = require('sequelize');

class Meal extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            thumbnail: DataTypes.STRING,
            price: DataTypes.FLOAT
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Restaurant, { foreignKey: 'restaurant_id', as: 'restaurant'});
    }

}

module.exports = Meal;