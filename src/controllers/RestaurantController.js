const Restaurant = require('../models/Restaurant');

module.exports = {
    async index(req, res) {  
      const restaurants = await Restaurant.findAll();
  
      return res.json(restaurants);
    },
  
    async store(req, res) {
      const thumbnail = `http://localhost:3333/files/${req.file.filename}`;
      console.log(req.file);
      const { name, email, price } = req.body;

      const restaurant = await Restaurant.create({
        thumbnail,
        name,
        email,
        delivery_tax: price
      });
  
      return res.json(restaurant);
    }
  };