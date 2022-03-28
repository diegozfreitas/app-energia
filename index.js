const express = require('express')
const app = express()

const routerOrders = require('./routesOrders')
const routesUsers = require('./routesUsers')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/orders', routerOrders);
app.use('/users', routesUsers);

app.listen(8000, () => {
  console.log(`api rodando na porta ${8000}`)
})