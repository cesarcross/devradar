require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}), 

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

// http methos: get, post, put, delete
// Tipos de parametros: 
// Query params: request.query (filtros, ordenacao, paginacao..)
// Route params: request.params (identificar um recurso na alteracao ou remocao)
// Body: request.body (dados para criacao ou alteracao de servico)
// MongoDB (nao-relacional)
