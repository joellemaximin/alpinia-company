const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport');
const config = require('./config-mailgun');

const auth = {
  auth: {
    api_key: config.API_KEY,
    domain: config.DOMAIN,
  },
  // proxy: 'http://user:pass@localhost:8080' // optional proxy, default is false
}
  