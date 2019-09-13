exports.seed = function (knex) {
  return knex('projects').insert([
    { project_name: 'Late Spring Cleaning', description: 'clean house' },
    { project_name: 'Restock House' },
    { project_name: 'Groom Pups', description: 'they are getting shaggy and smelly' },
  ]);
};