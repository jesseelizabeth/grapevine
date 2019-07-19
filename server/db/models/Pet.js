const Sequelize = require('sequelize');
const db = require('../db');
const { toTitleCase } = require('../../../utils');

const Pet = db.define('pet', {
  displayName: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      const name = this.getDataValue('displayName');
      if (name) {
        return toTitleCase(name);
      }
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
      if (type) {
        return toTitleCase(type);
      }
    },
    set(val) {
      if (val) {
        this.setDataValue('type', val.toLowerCase());
      } else {
        this.setDataValue('type', (val = null));
      }
    },
  },
});

module.exports = Pet;
