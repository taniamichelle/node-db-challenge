exports.seed = function (knex) {
  return knex('resources').insert([
    { resource_name: 'vacuum' },
    { resource_name: 'swiffer' },
    { resource_name: 'puppy shampoo' },
    { resource_name: 'puppy scissors' },
    { resource_name: 'puppy nail trimmers' },
  ]);
};