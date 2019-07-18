const Sequelize = require('sequelize');
const db = require('../db');

const Pet = db.define('pet', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  displayName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
  },
});

module.exports = Pet;
