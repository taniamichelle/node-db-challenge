exports.seed = function (knex) {
  return knex('projects-task').insert([
    { project_id: 1, task_id: 1 },
    { project_id: 1, task_id: 2 },
    { project_id: 1, task_id: 3 },
    { project_id: 1, task_id: 4 },
    { project_id: 2, task_id: 5 },
    { project_id: 2, task_id: 6 },
    { project_id: 3, task_id: 7 },
    { project_id: 3, task_id: 8 },
    { project_id: 3, task_id: 9 },
  ]);
};