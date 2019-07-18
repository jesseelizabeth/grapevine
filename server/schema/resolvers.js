const { Contact, Pet, Relationship } = require('../db/models');

const resolvers = {
  Query: {
    contact: (parent, { id }) => Contact.findByPk(id),
    pet: (parent, { id }) => Pet.findByPk(id),
    contacts: () => Contact.findAll(),
    pets: () => Pet.findAll(),
  },
  Contact: {
    pets: parent => Pet.findAll({ where: { contactId: parent.id } }),
    relationships: parent =>
      Relationship.findAll({
        where: { contactId: parent.id },
        include: { model: Contact },
      }),
  },
  Pet: {
    contact: parent => Contact.findByPk(parent.contactId),
  },
  Relationship: {
    contact: parent =>
      Contact.findOne({ where: { id: parent.relationshipId } }),
  },
};

module.exports = resolvers;
