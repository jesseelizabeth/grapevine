// associations here
const Contact = require('./Contact');
const Pet = require('./Pet');
const Relationship = require('./Relationship');

Contact.hasMany(Pet);
Pet.belongsTo(Contact);

Contact.belongsToMany(Contact, {
  as: 'relationships',
  through: Relationship,
});
Contact.hasMany(Relationship);
Relationship.belongsTo(Contact);

module.exports = { Contact, Pet, Relationship };
