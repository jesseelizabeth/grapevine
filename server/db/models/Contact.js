const Sequelize = require('sequelize');
const db = require('../db');
const { toTitleCase } = require('../../../utils');

const Contact = db.define('contact', {
  displayName: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      const name = this.getDataValue('displayName');
      return toTitleCase(name);
    },
    set(val) {
      if (val) {
        this.setDataValue('displayName', val.toLowerCase());
      }
    },
  },
  title: {
    type: Sequelize.STRING,
    get() {
      const title = this.getDataValue('title');
      return toTitleCase(title);
    },
    set(val) {
      if (val) {
        this.setDataValue('title', val.toLowerCase());
      }
    },
  },
  company: {
    type: Sequelize.STRING,
    get() {
      const company = this.getDataValue('company');
      return toTitleCase(company);
    },
    set(val) {
      if (val) {
        this.setDataValue('company', val.toLowerCase());
      }
    },
  },
  location: {
    type: Sequelize.STRING,
    get() {
      const location = this.getDataValue('location');
      return toTitleCase(location);
    },
    set(val) {
      if (val) {
        this.setDataValue('location', val.toLowerCase());
      }
    },
  },
});

module.exports = Contact;
