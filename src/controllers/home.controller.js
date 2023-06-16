const Io = require("../utils/io");
const Services = new Io("./database/services.json");
const Testimonial = new Io("./database/testimonials.json");
const Contacts  = new Io("./database/contacts.json");

const home = async (req, res) => {
  const services = await Services.read();
  const testimonials = await Testimonial.read();

  res.render("index", {
    services,
    testimonials,
  });
};


const adminPage = async (req, res) => {
  res.render("admin");
};
const formPage = async (req, res) => {
  res.render("form");
};

const AboutPage = async (req, res) => {
  res.render("about");
};
const ServicePage = async (req, res) => {
  res.render("services");
};
const BlogPage = async (req, res) => {
  res.render("blog");
};

const ContactUsPage = async (req, res) => {
  res.render("contact");
};

const showService = async (req, res) => {
  const services = await Services.read();
  res.render("servicePage", {
    services,
  });
};

const showTestimonial = async (req, res) => {
  const testimonials = await Testimonial.read();

  res.render("showTestimonial", {
    testimonials,
  });
};


const ContactUs = async (req,res)=>{
  const contacts = await  Contacts.read()

  res.render("contactPage", {
    contacts
  } )
}


module.exports = {
  home,
  formPage,
  adminPage,
  AboutPage,
  ServicePage,
  BlogPage,
  ContactUsPage,
  showService,
  showTestimonial,
  ContactUs
};
