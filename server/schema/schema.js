const typeDefs = `
  type Contact {
    id: ID!
    displayName: String
    title: String
    company: String
    location: String
    pets: [Pet]
    relationships: [Relationship]
  }

  type Pet {
    id: ID!
    displayName: String
    type: String
    contact: Contact
  }

  type Relationship {
    relationshipId: ID!
    contactId: ID!
    type: String
    contact: Contact
  }

  input petInput {
    displayName: String
    type: String
  }

  input relationshipInput {
    relationshipId: ID!
    contactId: ID!
    type: String
  }

  type Query {
    contact(id: ID!): Contact
    pet(id: ID!): Pet
    contacts: [Contact]
    pets: [Pet]
  }

  type Mutation {
    addContact(displayName: String!, title: String, company: String, location: String, pets: petInput, relationships: relationshipInput): Contact

    addPet(displayName: String!, type: String, contactId: ID!): Pet

    addRelationship(contactId: ID!, relationshipId: ID!, type: String!): Relationship
  }
`;

module.exports = typeDefs;
