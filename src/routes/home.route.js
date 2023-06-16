const { Router } = require("express");
const {
  home,
  adminPage,
  formPage,
  AboutPage,
  ServicePage,
  BlogPage,
  ContactUsPage,
  showService,
  showTestimonial,
  ContactUs
} = require("../controllers/home.controller");
const isAuth = require("../middlewares/isAuth");

const router = Router();

router.get("/", home);
router.get("/admin", isAuth, adminPage);
router.get("/form", isAuth, formPage);
router.get("/showService" , isAuth, showService);
router.get("/showTestimonial" , isAuth, showTestimonial);
router.get("/about",  AboutPage);
router.get("/service",  ServicePage);
router.get("/blog",  BlogPage);
router.get("/contactUs",  ContactUsPage);
router.get("/contacts" , ContactUs)

module.exports = router;
