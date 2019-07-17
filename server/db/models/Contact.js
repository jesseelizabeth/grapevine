const Sequelize = require('sequelize');
const db = require('../db');

const Contact = db.define('contact', {
  displayName: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
  company: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
});

module.exports = Contact;
