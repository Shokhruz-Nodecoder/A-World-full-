const {Router} = require("express");
const isAuth = require("../middlewares/isAuth");
const { create } = require("../controllers/testimonial.controller");


const router = Router();

router.post("/testimonial", isAuth, create);

module.exports = router;
