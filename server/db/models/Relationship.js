const Sequelize = require('sequelize');
const db = require('../db');

const Relationship = db.define('relationship', {
  type: {
    type: Sequelize.STRING,
  },
});

module.exports = Relationship;
