var express = require('express');
var routerOrders = express.Router();

const knex = require('./knexConnection')

routerOrders.get('/', async function (req, res) {
  try {
    const data = await knex('orders')
      .join('users', 'orders.userId', '=', 'users.id')
      .select(
        'orders.id',
        'orders.addressStreet',
        'orders.status',
        'orders.createdAt',
        'users.name',
        'users.phone',
        'users.email',
      )

    res.json({ status: "OK", dataRes: data });
  } catch (err) {
    res.json({ status: "ERROR", err: err });
  }
});

routerOrders.post('/', async function (req, res) {
  const { body } = req;

  try {

    console.log(body.userId)

    if (body.userId !== '' && body.userId === undefined) {
      return res.json({ status: "ERROR", msg: "necessario informar o user" });
    }

    const data = {
      userId: body.userId,
      addressStreet: body.addressStreet,
      addressNumber: body.addressNumber,
      addressNeighborhood: body.addressNeighborhood,
      addressCity: body.addressCity,
      status: 'pendente',
      createdAt: new Date()
    }

    const result = await knex('orders')
      .insert(data)

    res.json({ status: "OK" });
  } catch (err) {
    res.json({ status: "ERROR", err: err });
  }
});

routerOrders.get('/:id', async function (req, res) {
  const { params } = req;

  try {
    const data = await knex('orders')
      .join('users', 'orders.userId', '=', 'users.id')
      .select(
        'orders.id',
        'orders.addressStreet',
        'orders.status',
        'orders.createdAt',
        'users.name',
        'users.phone',
        'users.email',
      )
      .where({ 'orders.id': params.id })

    if (data.length === 0) {
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

routerOrders.patch('/:id', async function (req, res) {
  const { body, params } = req;

  try {
    const data = {
      ...body,
      updateAt: new Date()
    }

    const result = await knex("orders")
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

routerOrders.delete('/:id', async function (req, res) {
  const { body, params } = req;

  try {

    if (body.password !== "123456") {
      return res.json({
        status: "ERROR",
        msg: "você não pode fazer exclusão de pedido!"
      });
    }

    const result = await knex('orders')
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


module.exports = routerOrders;

