const Sequelize = require('sequelize');
const db = require('../db');

const Relationship = db.define('relationship', {
  type: {
    type: Sequelize.ENUM,
    values: ['Boyfriend, Girlfriend, Husband, Wife,Mom, Dad'],
    allowNull: false,
  },
});

module.exports = Relationship;
