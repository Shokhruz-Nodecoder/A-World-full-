const {v4:uuid} = require("uuid")
const Io = require("../utils/io")
const Testimonials = new Io("./database/testimonials.json")
const Testimonial = require("../models/Testimonial")
const path = require("path")


const create = async (req, res) => {
    const {image} = req.files;
    
    const {title,name, field} = req.body;
  
    const imageName = `${uuid()}${path.extname(image.name)}`;
   
  
    image.mv(process.cwd() + "/uploads/" + imageName);
  
    const newTest = new Testimonial(title, imageName, name, field);
  
    const testimonials = await Testimonials.read();
  
    const data = testimonials.length ? [...testimonials, newTest] : [newTest];
  
    await Testimonials.write(data);
  
    res.redirect('/form');
  };
  
  module.exports = {
    create,
  };