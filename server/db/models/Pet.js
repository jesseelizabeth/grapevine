const Sequelize = require('sequelize');
const db = require('../db');

const Pet = db.define('pet', {
  displayName: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.STRING,
  },
});

module.exports = Pet;
