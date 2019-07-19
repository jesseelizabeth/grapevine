const router = require('express').Router();
const { Contact, Relationship, Pet } = require('../db/models');
module.exports = router;

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

router.get('/:id', async (req, res, next) => {
  try {
    const contact = await Contact.findOne({
      where: { id: req.params.id },
      include: [{ model: Relationship }, { model: Pet }],
    });
    res.send(contact);
  } catch (error) {
    next(error);
  }
});
