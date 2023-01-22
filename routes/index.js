var express = require('express');
const { registerHelper } = require('hbs');
var router = express.Router();

let team = {
  justin: {
    name : 'justin',
    role : 'developer',
    image : 'justin.jpeg'
  },

  Joe: {
    name : 'Joe',
    role : '3D motion designer',
  },

  Amr: {
    name : 'Amr',
    role : ' Graphicdesigner',
  },

}


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express',
content: 'express is easy!' });
});
router.get('/team/:member', function(req, res) {
  console.log(req.params.member);
  res.render('team', { person: team[req.params.member]});

})
module.exports = router;