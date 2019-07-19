/* eslint-disable complexity */
const router = require('express').Router();
const { Contact, Relationship, Pet } = require('../db/models');
module.exports = router;
const { types } = require('../../utils');

// get all contacts
router.get('/', async (req, res, next) => {
  try {
    const contacts = await Contact.findAll({
      include: [{ model: Relationship }, { model: Pet }],
    });
    res.json(contacts);
  } catch (error) {
    next(error);
  }
});

// get one contact
router.get('/:contactId', async (req, res, next) => {
  try {
    const contact = await Contact.findOne({
      where: { id: req.params.contactId },
      include: [{ model: Relationship }, { model: Pet }],
    });
    res.send(contact);
  } catch (error) {
    next(error);
  }
});

// add a contact
router.post('/', async (req, res, next) => {
  try {
    const {
      displayName,
      title,
      company,
      location,
      relationshipName,
      relationshipType,
      petName,
      petType,
    } = req.body;
    const [contact, created] = await Contact.findOrCreate({
      where: { displayName: displayName.toLowerCase() },
      defaults: {
        displayName,
        title,
        company,
        location,
      },
    });
    // if contact already exists, update contact with new info
    if (!created) {
      if (title) {
        await contact.update({ title });
      }
      if (company) {
        await contact.update({ company });
      }
      if (location) {
        await contact.update({ location });
      }
    }

    // add pet
    if (petName) {
      await Pet.create({
        displayName: petName,
        type: petType,
        contactId: contact.id,
      });
    }

    // add relationship
    // check if relationship is a contact
    if (relationshipName) {
      const foundContact = await Contact.findOne({
        where: { displayName: relationshipName.toLowerCase() },
      });
      // if contact exists, create the relationship
      if (foundContact) {
        await Relationship.create({
          type: relationshipType,
          contactId: contact.id,
          relationshipId: foundContact.id,
        });
        // create reverse relationship
        await Relationship.create({
          type: types[relationshipType],
          contactId: foundContact.id,
          relationshipId: contact.id,
        });
      } else {
        // if contact doesn't exist, add the contact and create the relationship
        const newContact = await Contact.create({
          displayName: relationshipName,
        });
        await Relationship.create({
          type: relationshipType,
          contactId: contact.id,
          relationshipId: newContact.id,
        });
        // create reverse relationship
        await Relationship.create({
          type: types[relationshipType],
          contactId: newContact.id,
          relationshipId: contact.id,
        });
      }
    }

    res.send(contact);
  } catch (error) {
    next(error);
  }
});

// add a pet
router.post('/:contactId/pets', async (req, res, next) => {
  try {
    const { displayName, type } = req.body;
    const pet = await Pet.create({
      displayName,
      type,
      contactId: req.params.contactId,
    });
    res.send(pet);
  } catch (error) {
    next(error);
  }
});

// add a relationship
router.post('/:contactId/relationships', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { displayName, type } = req.body;
    // check if relationship is a contact
    const contact = await Contact.findOne({
      where: { displayName },
    });
    // if contact exists, create the relationship
    if (contact) {
      await Relationship.create({
        type,
        contactId,
        relationshipId: contact.id,
      });
      // create reverse relationship
      await Relationship.create({
        type: types[type],
        contactId: contact.id,
        relationshipId: contactId,
      });
    } else {
      // if contact doesn't exist, add the contact and create the relationship
      const newContact = await Contact.create({
        displayName,
      });
      await Relationship.create({
        type,
        contactId,
        relationshipId: newContact.id,
      });
      // create reverse relationship
      await Relationship.create({
        type: types[type],
        contactId: newContact.id,
        relationshipId: contactId,
      });
    }
  } catch (error) {
    next(error);
  }
});
