const { Model, DataTypes } = require('sequelize');

class Order extends Model {
    static init(sequelize) {
        super.init({
            total_price: DataTypes.FLOAT,
        }, {
            sequelize
        })
    }
}

module.exports = Order;