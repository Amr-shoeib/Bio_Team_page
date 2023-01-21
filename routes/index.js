
const { Router } = require('express');
const express = require ('express');
const router = express.Router();

Router.get('/', function (req, res) {
    res.render('index',{
      title:"Home",
      name: "Amr"
    })
  })