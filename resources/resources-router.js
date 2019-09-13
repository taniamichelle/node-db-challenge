const router = require('express').Router();

const Resources = require('./resources-model');

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Error retrieving resources.' });
        });
});

router.post('/', (req, res) => {
    Resources.addResource()
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Error adding resource.' });
        });
});

module.exports = router;