var express = require('express');
const { registerHelper } = require('hbs');
var router = express.Router();

let team = {
  justin: {
    name : 'justin',
    role : 'developer',
    image : 'justin.jpeg'
  },

  joe: {
    name : 'Joe',
    role : '3D motion designer',
  },

  amr: {
    name : 'Amr',
    role : ' Graphic designer',
  },

}


/* GET home page. */
router.get('/index', function(req, res) {
  res.render('index', { title: 'Express',
content: 'express is easy!' });
});

router.get('/justin', function(req, res) {
  console.log(req.params.member);
  res.render('justin', { person: team[req.params.member]});

})

router.get('/joe', function(req, res) {
  console.log(req.params.member);
  res.render('joe', { person: team[req.params.member]});

})

module.exports = router;