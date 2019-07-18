const Sequelize = require('sequelize');
const db = require('../db');

const Contact = db.define('contact', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  displayName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
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
