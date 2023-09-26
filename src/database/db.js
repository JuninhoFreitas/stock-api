const { Sequelize } = require('sequelize');

// TODO: Store these properties in a config file.
const database = new Sequelize({
  dialect: 'postgres',
  username: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  port: '5432'
});

module.exports = database;
