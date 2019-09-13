const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./projects/projects-router');
const resourcesRouter = require('./resources/resources-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);

module.exports = server;