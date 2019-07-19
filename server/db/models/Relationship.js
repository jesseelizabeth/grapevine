const Sequelize = require('sequelize');
const db = require('../db');
const { toTitleCase } = require('../../../utils');

const Relationship = db.define('relationship', {
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
        this.setDataValue('type', null);
      }
    },
  },
});

module.exports = Relationship;
