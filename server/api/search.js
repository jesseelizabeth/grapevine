const router = require('express').Router();
const { Contact, Relationship, Pet } = require('../db/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = router;

// search functionality
router.get('/:keyword', async (req, res, next) => {
  try {
    const { keyword } = req.params;
    const contacts = await Contact.findAll({
      where: {
        [Op.or]: [
          { displayName: { [Op.substring]: keyword } },
          { title: { [Op.substring]: keyword } },
          { company: { [Op.substring]: keyword } },
          { location: { [Op.substring]: keyword } },
        ],
      },
    });
    const relationships = await Relationship.findAll({
      where: {
        [Op.or]: [{ type: { [Op.substring]: keyword } }],
      },
    });
    let relContacts = [];
    await relationships.map(async relationship => {
      const contact = await Contact.findOne({
        where: { id: relationship.relationshipId },
      });
      relContacts.push(contact);
    });
    const pets = await Pet.findAll({
      where: {
        [Op.or]: [
          { displayName: { [Op.substring]: keyword } },
          { type: { [Op.substring]: keyword } },
        ],
      },
      include: { model: Contact },
    });
    res.json({ contacts, relationships, pets, relContacts });
  } catch (error) {
    next(error);
  }
});
