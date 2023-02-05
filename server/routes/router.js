const express = require('express');
const route = express.Router();

const services = require('../services/render')
const controller = require('../controller/control')

//This part can be still modularized or spcialized. where we can create a specila render.js file for rendering only

/*
* @description RootRoute
* @method GET /
*/
route.get('/',services.renderHome);

//API
route.get('/api/find_url?link:',controller.find)

module.exports = route