const db = require('../server/db');
const { green, red } = require('chalk');
const { Contact, Pet, Relationship } = require('../server/db/models');

const seed = async () => {
  await db.sync({ force: true });

  // seed your database here!
  await Promise.all([
    Contact.create({
      id: 1,
      displayName: 'Kenneth Lai',
      title: 'Software Engineer',
      company: 'Grapevine',
      location: 'New York City',
    }),
    Contact.create({
      id: 2,
      displayName: 'Andrew Reiner',
      title: 'Cofounder',
      company: 'Grapevine',
      location: 'New York City',
    }),
    Contact.create({
      id: 3,
      displayName: 'Lloyd Emelle',
      title: 'Lead Hacker',
      company: 'Grapevine',
      location: 'New York City',
    }),
    Contact.create({
      id: 4,
      displayName: 'Rich Prior',
      title: 'Lead Designer',
      company: 'Grapevine',
      location: 'New York City',
    }),
    Contact.create({
      id: 5,
      displayName: 'Gina Lee',
      title: 'CEO',
      company: 'BanCard Plus',
      location: 'New York City',
    }),
    Contact.create({
      id: 6,
      displayName: 'Kristen Reiner',
      title: 'Investor Relations Business Development',
      company: 'The Blackstone Group',
      location: 'New York City',
    }),
    Contact.create({
      id: 7,
      displayName: 'Stacey',
      title: null,
      company: null,
      location: 'New York City',
    }),
    Contact.create({
      id: 8,
      displayName: 'Dylan Reiner',
      title: 'Baby',
      company: null,
      location: 'New York City',
    }),
    Contact.create({
      id: 9,
      displayName: 'Leah Prior',
      title: null,
      company: null,
      location: 'New York City',
    }),
  ]);

  await Promise.all([
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

  await Promise.all([
    Relationship.create({
      type: 'Girlfriend',
      contactId: 1,
      relationshipId: 5,
    }),
    Relationship.create({
      type: 'Wife',
      contactId: 2,
      relationshipId: 6,
    }),
    Relationship.create({
      type: 'Girlfriend',
      contactId: 3,
      relationshipId: 7,
    }),
    Relationship.create({
      type: 'Wife',
      contactId: 4,
      relationshipId: 9,
    }),
    Relationship.create({
      type: 'Boyfriend',
      contactId: 5,
      relationshipId: 1,
    }),
    Relationship.create({
      type: 'Husband',
      contactId: 6,
      relationshipId: 2,
    }),
    Relationship.create({
      type: 'Boyfriend',
      contactId: 7,
      relationshipId: 3,
    }),
    Relationship.create({
      type: 'Husband',
      contactId: 9,
      relationshipId: 4,
    }),
    Relationship.create({
      type: 'Mom',
      contactId: 8,
      relationshipId: 6,
    }),
    Relationship.create({
      type: 'Dad',
      contactId: 8,
      relationshipId: 2,
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
