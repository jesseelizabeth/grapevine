const router = require('express').Router();
const { Contact, Relationship, Pet } = require('../db/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = router;

// search functionality
router.get('/:keyword', async (req, res, next) => {
  try {
    let { keyword } = req.params;
    keyword = keyword.toLowerCase();
    const contacts = await Contact.findAll({
      where: {
        [Op.or]: [
          { displayName: { [Op.substring]: keyword } },
          { title: { [Op.substring]: keyword } },
          { company: { [Op.substring]: keyword } },
          { location: { [Op.substring]: keyword } },
        ],
      },
      include: [{ model: Relationship }, { model: Pet }],
    });
    const relationships = await Relationship.findAll({
      where: {
        [Op.or]: [{ type: { [Op.substring]: keyword } }],
      },
      include: { model: Contact },
    });
    let relContacts = [];
    await relationships.map(async relationship => {
      const contact = await Contact.findOne({
        where: { id: relationship.relationshipId },
        include: [{ model: Pet }, { model: Relationship }],
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
