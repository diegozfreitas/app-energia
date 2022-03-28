var express = require('express');
var routesUsers = express.Router();

const knex = require('./knexConnection')

routesUsers.get('/', async function (req, res) {
  try {
    const data = await knex("users")

    res.json({ status: "OK", dataRes: data });
  } catch (err) {
    res.json({ status: "ERROR", err: err });
  }
});

routesUsers.post('/', async function (req, res) {
  const { body } = req;

  try {

    const data = {
      name: body.name,
      email: body.email,
      phone: body.phone
    }

    const result = await knex('users')
      .insert(data)

    res.json({ status: "OK" });
  } catch (err) {
    res.json({ status: "ERROR", err: err });
  }
});

routesUsers.get('/:id', async function (req, res) {
  const { params } = req;

  try {
    const data = await knex('users')
      .where({ id: params.id })

      if(data.length === 0){
        return res.json({ 
          status: "ERROR",
           msg: "não encontrado!" 
          });
      }

    res.json({ status: "OK", dataRes: data[0] });
  } catch (err) {
    res.json({ status: "ERROR", err: err });
  }
});

routesUsers.patch('/:id', async function (req, res) {
  const { body, params } = req;

  try {
    const data = {
      ...body
    }

    const result = await knex("users")
      .update(data)
      .where({ id: params.id })

    if (result !== 1) {
      return res.json({
        status: "ERROR",
        msg: 'algo deu rum na atualização'
      });
    }

    res.json({ status: "OK", dataRes: data });
  } catch (err) {
    res.json({ status: "ERROR", err: err });
  }
});

routesUsers.delete('/:id', async function (req, res) {
  const { body, params } = req;

  try {

    if (body.password !== "123456") {
      return res.json({
        status: "ERROR",
        msg: "você não pode fazer exclusão de pedido!"
      });
    }

    const result = await knex('users')
      .where({ id: params.id })
      .del()

    if (result === 0) {
      return res.json({
        status: "ERROR",
        msg: "não encontrado!"
      });
    }

    res.json({ status: "OK" });
  } catch (err) {
    res.json({ status: "ERROR", err: err });
  }
});


module.exports = routesUsers;

