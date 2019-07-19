const Sequelize = require('sequelize');
const db = require('../db');
const { toTitleCase } = require('../../../utils');

const Pet = db.define('pet', {
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
  type: {
    type: Sequelize.STRING,
    get() {
      const type = this.getDataValue('type');
      return toTitleCase(type);
    },
    set(val) {
      if (val) {
        this.setDataValue('type', val.toLowerCase());
      }
    },
  },
});

module.exports = Pet;
