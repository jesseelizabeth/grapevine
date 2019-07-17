// associations here
const Contact = require('./Contact');
const Pet = require('./Pet');
const Relationship = require('./Relationship');

Contact.hasMany(Pet);
Pet.belongsTo(Contact);

Contact.belongsToMany(Contact, {
  as: 'relationships',
  through: 'relationship',
});
Contact.hasMany(Relationship);

module.exports = { Contact, Pet, Relationship };
