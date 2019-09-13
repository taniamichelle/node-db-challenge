exports.seed = function (knex) {
  return knex('tasks').insert([
    { task_name: 'vacuum', description: 'vacuum stuff', project_id: 1 },
    { task_name: 'mop', description: 'mop floors', project_id: 1 },
    { task_name: 'do laundry', description: 'clean clothes and towels', project_id: 1 },
    { task_name: 'do dishes', description: 'clean dishes and utensils', project_id: 1 },
    { task_name: 'grocery shop', description: 'get groceries', project_id: 2 },
    { task_name: 'buy cleaning products', description: 'low on cleaning supplies', project_id: 2 },
    { task_name: 'trim excess puppy hair', description: 'pups are getting too fluffy', project_id: 3 },
    { task_name: 'trim puppy nails', description: 'pup nails are getting out of control', project_id: 3 },
    { task_name: 'bathe puppies', description: 'pups are mildly malodorous', project_id: 3 },
  ]);
};