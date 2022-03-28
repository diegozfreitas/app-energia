 const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '',
    port: 41890,
    user: '',
    password: '',
    database: ''
  }
});

module.exports = knex;
