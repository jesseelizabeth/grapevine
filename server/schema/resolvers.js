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

  Mutation: {
    addContact: async (parent, contact) => {
      const {
        displayName,
        title,
        company,
        location,
        relationships,
        pets,
      } = contact;
      // create new contact
      const newContact = await Contact.create({
        displayName,
        title,
        company,
        location,
      });

      // create relationships
      if (relationships) {
        relationships.map(async relationship => {
          const foundContact = await Contact.findOne({
            where: { displayName: relationship.displayName },
          });
          if (foundContact) {
            await Relationship.create({
              contactId: newContact.id,
              relationshipId: foundContact.id,
              type: relationship.type,
            });
          } else {
            const addedContact = await Contact.create({
              displayName: relationship.displayName,
            });
            await Relationship.create({
              contactId: newContact.id,
              relationshipId: addedContact.id,
              type: relationship.type,
            });
          }
        });
      }

      // add pets
      if (pets) {
        pets.map(async pet => {
          await Pet.create({
            displayName: pet.displayName,
            type: pet.type,
            contactId: newContact.id,
          });
        });
      }

      return newContact;
    },

    // addRelationship: async (parent, relationship) => {
    //   const foundContact = await Contact.findOne({
    //     where: { displayName: relationship.displayName },
    //   });
    //   if (foundContact) {
    //     await Relationship.create({
    //       contactId: parent.id,
    //       relationshipId: foundContact.id,
    //       type: relationship.type,
    //     });
    //   } else {
    //     const newContact = await Contact.create({
    //       displayName: relationship.displayName,
    //     });
    //     await Relationship.create({
    //       contactId: parent.id,
    //       relationshipId: newContact.id,
    //       type: relationship.type,
    //     });
    //   }
    // },

    // addPet: async (parent, pet) => {
    //   await Pet.create({
    //     displayName: pet.displayName,
    //     type: pet.type,
    //     contactId: parent.id,
    //   });
    // },
  },
};

module.exports = resolvers;
