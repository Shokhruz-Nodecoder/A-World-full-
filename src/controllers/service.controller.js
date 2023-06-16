const {v4:uuid} = require("uuid")
const Io = require("../utils/io")
const Services = new Io("./database/services.json")
const Service = require("../models/Service")
const path = require("path")


const create = async (req, res) => {
    const {image} = req.files;
    const {name} = req.body;
  
    const imageName = `${uuid()}${path.extname(image.name)}`;
  
    image.mv(process.cwd() + "/uploads/" + imageName);
  
    const newService = new Service(imageName, name);
  
    const services = await Services.read();
  
    const data = services.length ? [...services, newService] : [newService];
  
    await Services.write(data);
  
    res.redirect('/form');
  };
  
  module.exports = {
    create,
  };