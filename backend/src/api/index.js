import apiController from './number2Word/controller';

export default function controller() {
  // this is the entrypoint to add all the services for the API
  this.configure(apiController);
}
