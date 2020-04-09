'use strict'

// importando modulos
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

// iniciando aplicação
const app = express();
const port = 3000;
app.set('port', port);