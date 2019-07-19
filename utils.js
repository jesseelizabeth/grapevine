const types = {
  Boyfriend: 'Girlfriend',
  Girlfriend: 'Boyfriend',
  Husband: 'Wife',
  Wife: 'Husband',
  Mom: 'Child',
  Dad: 'Child',
  Child: 'Parent',
};

const toTitleCase = phrase => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

module.exports = { types, toTitleCase };
