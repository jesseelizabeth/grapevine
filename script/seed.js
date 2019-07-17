const db = require('../server/db');
const { green, red } = require('chalk');
const { Contact, Pet } = require('../server/db/models');

const seed = async () => {
  await db.sync({ force: true });

  // seed your database here!
  await Promise.all([
    Contact.create({
      displayName: 'Dylan Reiner',
      title: 'Baby',
      company: null,
      location: 'New York City',
    }),
    Contact.create({
      displayName: 'Andrew Reiner',
      title: 'Cofounder',
      company: 'Grapevine',
      location: 'New York City',
    }),
    Contact.create({
      displayName: 'Lloyd Emelle',
      title: 'Lead Hacker',
      company: 'Grapevine',
      location: 'New York City',
    }),
    Contact.create({
      displayName: 'Rich Prior',
      title: 'Lead Designer',
      company: 'Grapevine',
      location: 'New York City',
    }),
    Contact.create({
      displayName: 'Gina Lee',
      title: 'CEO',
      company: 'BanCard Plus',
      location: 'New York City',
    }),
    Pet.create({
      displayName: 'Nike',
      type: 'dog',
      contactId: 2,
    }),
    Pet.create({
      displayName: 'Jjong',
      type: 'dog',
      contactId: 5,
    }),
    Pet.create({
      displayName: 'Sweetie',
      type: 'cat',
      contactId: 5,
    }),
  ]);

  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
