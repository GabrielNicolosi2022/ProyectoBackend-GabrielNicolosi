const express = require('express');
const app = express();
const productsRouter = require('./routes/products.router.js');
const cartsRouter = require('./routes/carts.router.js');

app.use(express.json()); // Middleware para parsear JSON
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(`${__dirname}/public`));

// Rutas
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

const server = app.listen(8080, () =>
  console.log('Server listening in port 8080')
);
