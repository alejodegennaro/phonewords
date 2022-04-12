import { disallow } from 'feathers-hooks-common';

export default {
  before: {
    all: [
      // here you would usually authenticate the incoming requests
      // and configure your CRUD service methods and any other middleware
    ],
    find: [],
    get: [],
    // we will only allow GET requests to this service
    create: [disallow()],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()],
  },
  after: {
    all: [],
    find: [],
    get: [],
    patch: [],
  },
};
