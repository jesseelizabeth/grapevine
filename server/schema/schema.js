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

  type Query {
    contact(id: ID!): Contact
    pet(id: ID!): Pet
    contacts: [Contact]
    pets: [Pet]
  }
`;

module.exports = typeDefs;
