let appConfig = {};
let nodeMailer = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb://localhost:27017/todo'
    // uri: 'mongodb://localhost:27017/todo'
  }
appConfig.apiVersion = '/api/v1';

nodeMailer.email="sankimahilatd@gmail.com";
nodeMailer.password = "New@1903";

module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db :appConfig.db,
    apiVersion : appConfig.apiVersion,
    email: nodeMailer.email,
    password: nodeMailer.password
};