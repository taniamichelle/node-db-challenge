exports.seed = function (knex) {
  return knex('tasks').insert([
    { task_name: 'vacuum', description: 'vacuum stuff', completed: false },
    { task_name: 'mop', description: 'mop floors', completed: false },
    { task_name: 'do laundry', description: 'clean clothes and towels', completed: false },
    { task_name: 'do dishes', description: 'clean dishes and utensils', completed: false },
    { task_name: 'grocery shop', description: 'get groceries', completed: false },
    { task_name: 'buy cleaning products', description: 'low on cleaning supplies', completed: false },
    { task_name: 'trim excess puppy hair', description: 'pups are getting too fluffy', completed: false },
    { task_name: 'trim puppy nails', description: 'pup nails are getting out of control', completed: false },
    { task_name: 'bathe puppies', description: 'pups are mildly malodorous', completed: false },
  ]);
};