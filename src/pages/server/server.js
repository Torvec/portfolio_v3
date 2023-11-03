import { createServer, Model } from 'miragejs';
import { projects } from './projectSeedData';

createServer({
  models: {
    project: Model,
  },
  routes() {
    this.namespace = 'api';
    this.get('/projects', (schema) => {
      return schema.projects.all();
    });
    this.get('/projects/:id', (schema, request) => {
      const id = request.params.id;
      return schema.projects.find(id);
    });
  },
  seeds(server) {
    projects.forEach((project) => {
      server.create('project', project);
    });
  },
});
