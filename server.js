import express from 'express';
import { productsRouter } from './routes/products';
import { cartsRouter } from './routes/cart';

const PORT = 8080

const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

// port
app.listen(PORT, () => {
    console.log(`Server activo en puerto ${PORT}`);
});