const path = require('path');
const express = require('express');
const app = express();
const publicDirectoryPath = path.join(__dirname, '../Public');
app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');


app.get('/', function (req, res) {
  res.render('index',{
    title:"Team Page",
    name: "Amr"
  })
})

// app.get('/layout', function (req, res) {
//     res.render('layout',{
//       title:"layout",
//       name: "layout"
//     })
//   })

  app.get('/joe', function (req, res) {
    res.render('joe',{
      title:"joe",
      name: "joe"
    })
  })

  app.get('/justin', function (req, res) {
    res.render('justin',{
      title:"Justin",
      name: "Justin"
    })
  })

  



app.listen(3000, () => {
    console.log (" The server is runing on port 3000");
})