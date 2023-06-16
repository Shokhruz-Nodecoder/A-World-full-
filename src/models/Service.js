const { v4: uuid } = require("uuid");

class Service {
  constructor(image, text) {
    this.id = uuid();
    this.image = image;
    this.text = text;
  }
}

module.exports = Service;
