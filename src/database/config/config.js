require("dotenv").config();
const {postgres,lazaro17,database_development} = process.env
{
  module.exports = {
    "development": {
    "username": "postgres",
    "password": "lazaro17",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }}
}
