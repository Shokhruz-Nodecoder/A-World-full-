const Io = require("../utils/io");
const Services = new Io("./database/services.json")
const Feedback  = new Io("./database/testimonials.json")

const deleteServ = async (req, res) => {
  const { id } = req.params;
  
  const services = await Services.read();
  const deletes = services.find((data) => data.id === id);
  if (!deletes) return res.redirect("/admin");

  services.splice(services.indexOf(deletes), 1);
  await Services.write(services);
  res.redirect("/showService"); 
};

const DeleteFeedback = async (req, res) => {
  const { id } = req.params;

  const feedbacks = await Feedback.read();

  const deletes = feedbacks.find((data) => data.id === id);
  if (!deletes) return res.redirect("/showTestimonial");

  feedbacks.splice(feedbacks.indexOf(deletes), 1);
  await Feedback.write(feedbacks);
  res.redirect("/showTestimonial");
};

module.exports = {
 deleteServ,
 DeleteFeedback
};