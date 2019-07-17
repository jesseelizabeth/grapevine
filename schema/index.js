const graphql = require('graphql');
// import models and lodash
const { Contact, Pet } = require('../server/db/models');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
} = graphql;

const ContactType = new GraphQLObjectType({
  name: 'Contact',
  fields: () => ({
    id: { type: GraphQLID },
    displayName: { type: GraphQLString },
    title: { type: GraphQLString },
    company: { type: GraphQLString },
    location: { type: GraphQLString },
    pets: {
      type: new GraphQLList(PetType),
      resolve(parent, args) {
        return Pet.findAll({ where: { contactId: parent.id } });
      },
    },
  }),
});

const PetType = new GraphQLObjectType({
  name: 'Pet',
  fields: () => ({
    id: { type: GraphQLID },
    displayName: { type: GraphQLString },
    type: { type: GraphQLString },
    contact: {
      type: ContactType,
      resolve(parent, args) {
        return Contact.findByPk(parent.contactId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    contact: {
      type: ContactType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Contact.findByPk(args.id);
      },
    },
    pet: {
      type: PetType,
      args: { id: { type: GraphQLID } },
      resolve(parents, args) {
        return Pet.findByPk(args.id);
      },
    },
    contacts: {
      type: new GraphQLList(ContactType),
      resolve(parent, args) {
        return Contact.findAll();
      },
    },
    pets: {
      type: new GraphQLList(PetType),
      resolve(parent, args) {
        return Pet.findAll();
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addContact: {
      type: ContactType,
      args: {
        displayName: { type: GraphQLString },
        title: { type: GraphQLString },
        company: { type: GraphQLString },
        location: { type: GraphQLString },
      },
      resolve(parent, contact) {
        return Contact.create(contact);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
