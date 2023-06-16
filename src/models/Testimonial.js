const { v4: uuid } = require("uuid");

class Service {
  constructor(title, image, name, field) {
    this.id = uuid();
    this.title = title;
    this.image = image;
    this.name = name;
    this.field = field;
   
}}

module.exports = Service;
