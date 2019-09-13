const router = require('express').Router();

const Projects = require('./projects-model');

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Error retrieving projects.' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Projects.getProject(id)
        .then(project => {
            if (project) {
                return res.json(project);
            } else {
                return res.status(404).json({ error: "Could not find project by that id." });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Error retrieving project by that id.' });
        });
});

router.post('/', (req, res) => {
    const projectData = req.body;
    Projects.addProject(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Error adding project.' });
        });
});

router.get('/:id/tasks', (req, res) => {
    const { id: project_id } = req.params;
    Projects.getTasks(project_id)
        .then(tasks => {
            if (tasks) {
                return res.json(tasks);
            } else {
                return res.status(404).json({ error: "Could not find tasks by that id." });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Error retrieving tasks.' });
        });
});

router.post('/:id/tasks', (req, res) => {
    const taskData = req.body;
    const { id } = req.params;
    Projects.getProject(id)
        .then(project => {
            if (project) {
                Projects.addTask(taskData, id)
                    .then(task => {
                        res.status(201).json(task)
                    })
            } else {
                res.status(404).json({ message: 'Could not find project with given id.' })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Error adding task.' });
        });
});

module.exports = router;