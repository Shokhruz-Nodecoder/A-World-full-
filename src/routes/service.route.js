const {Router} = require("express");
const isAuth = require("../middlewares/isAuth");
const { create } = require("../controllers/service.controller");


const router = Router();

router.post("/service", isAuth, create);

module.exports = router;
