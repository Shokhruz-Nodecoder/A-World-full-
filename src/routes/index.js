const auth = require("./auth.route");
const home = require("./home.route");

const service = require("./service.route")
const test = require("./testimonial.route")
const contact = require("./contact.route")
const deletePost = require("./delete.route")

module.exports = [auth, home,service,test,contact,deletePost];
