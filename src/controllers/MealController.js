const Meal = require('../models/Meal');

module.exports = {
    async search(req, res) {  
      const { restaurant_id } = req.params;  
      
      const meals = await Meal.findAll({ where: { restaurant_id } });
  
      return res.json(meals);
    },
  
    async store(req, res) {
      const thumbnail = `http://localhost:3333/files/${req.file.filename}`;
      const { restaurant_id, name, price } = req.body;

      const meal = await Meal.create({
        thumbnail,
        name,
        price,
        restaurant_id
      });
  
      return res.json(meal);
    }
  };