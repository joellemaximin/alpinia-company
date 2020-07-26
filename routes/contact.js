const express = require("express");
const router = express.Router();
const pool = require("../middleware/dbConnect");
const config = require('../services/mailgun');
const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport');

router.use(express.json());


router.get("/send-contact", async (req, res) => {
  const contactForm = 'SELECT * FROM contact';
  pool.query(contactForm, function (err, result){
    if (err) throw err;
    res.send(result);
    console.log(result);

  }); 
});


router.post("/contact-us", async (req, res) => {

  const auth = {
    auth: {
      api_key: config.API_KEY,
      domain: config.DOMAIN,
    },
    // proxy: 'http://user:pass@localhost:8080' // optional proxy, default is false
  }

  const nodemailerMailgun = nodemailer.createTransport(mg(auth));

    
  var data = {
    from: req.body.email,
    to: 'alpiniastudioweb@gmail.com',
    subject: "Nouvelle demande pour site web",
    number: req.body.number,
    text: req.body.text,
    category: req.body.category,
    username: req.body.username,
    html: 'Message de ' + req.body.username + ', Contenu du message: ' + req.body.text + '. Contact: ' + req.body.number + ''
  }

  nodemailerMailgun.sendMail(data, function(err, data) {
    if(err) throw err;
    res.json({data, message: 'msg sent'})
  })
  
});

module.exports = router;