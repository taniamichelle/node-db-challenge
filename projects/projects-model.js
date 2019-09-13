const db = require('../data/db-config');
const mappers = require('../helpers/mappers');

module.exports = {
    getProjects,
    getProject,
    addProject,
    getTasks,
    addTask
};

function getProjects() {
    return db('projects')
        .then(projects => {
            return projects.map(project => mappers.projectToBody(project))
        });
};
function getProject(id) {
    let query = db('projects as p');
    if (id) {
        query.where('p.id', id).first();
        const promises = [query, this.getTasks(id)];
        return Promise.all(promises).then(function (results) {
            let [project, tasks] = results;
            if (project) {
                project.tasks = tasks;
                return mappers.projectToBody(project);
            } else {
                return null;
            }
        });
    }
    return query.then(projects => {
        return projects.map(project => mappers.projectToBody(project));
    });
};

// function getProject(id) {
//     return db('projects')
//         .where({ 'projects.id': id })
//         .first();
// };

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
        .select('project_name', 'projects.description', 'task_name', 'tasks.description', 'tasks.notes', 'tasks.completed')
        .then(tasks => tasks.map(task => mappers.taskToBody(task)));
};

function addTask(project_id) {
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.id')
        .where({ project_id })
};
