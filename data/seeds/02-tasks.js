exports.seed = function (knex) {
  return knex('tasks').insert([
    { task_name: 'vacuum', completed: false },
    { task_name: 'mop', completed: false },
    { task_name: 'do laundry', completed: false },
    { task_name: 'do dishes', completed: false },
    { task_name: 'grocery shop', completed: false },
    { task_name: 'buy cleaning products', completed: false },
    { task_name: 'trim excess puppy hair', completed: false },
    { task_name: 'trim puppy nails', completed: false },
    { task_name: 'bathe puppies', completed: false },
  ]);
};