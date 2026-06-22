const path = require('path');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const indexRoutes = require('./routes/index');
const healthRoutes = require('./routes/health');
const productRoutes = require('./routes/products');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
app.use('/health', healthRoutes);
app.use('/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
