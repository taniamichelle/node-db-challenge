const db = require('../data/db-config');
const mappers = require('../helpers/mappers');

module.exports = {
    getResources,
    addResource,
};

function getResources() {
    return db('resources');
};

function addResource(resource) {
    return db('resources')
        .insert(resource)
        .then(resource => {
            return resource;
        });

};