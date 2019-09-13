const db = require('../data/db-config');

module.exports = {
    getResources,
    addResource,
    getProjects,
    getProject,
    addProject,
    getTasks,
    addTask
};

function getResources() {

};

function addResource() {

};

function getProjects() {
    return db('projects');
};

function getProject(id) {
    return db('projects')
        .where({ 'projects.id': id })
        .first();
};

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(project => {
            return project;
        });
};

function getTasks(project_id) {
    return db('tasks')
        .join('projects', 'tasks.id', 'projects.id')
        .where({ project_id })
        .select('project_name', 'task_name', 'tasks.description', 'tasks.notes', 'tasks.completed')
};

function addTask(project_id) {
    return db('projects-tasks')
        .join('projects', 'projects-tasks.project_id', 'projects.id')
        .join('tasks', 'projects-tasks.task_id', 'tasks.id')
        .where({ project_id })
};

// function intToBoolean(int) {
//     return int === 1 ? true : false;
// };

// function projectToBody(project) {
//     const result = {
//         ...project,
//         completed: intToBoolean(project.completed),
//     };

//     if (project.task) {
//         result.task = project.task.map(task => ({
//             ...task,
//             completed: intToBoolean(task.completed),
//         }));
//     }

//     return result;
// };

// function taskToBody(task) {
//     return {
//         ...task,
//         completed: intToBoolean(task.completed),
//     };
// }; 
