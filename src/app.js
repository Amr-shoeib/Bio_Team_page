const path = require('path');
const express = require('express');
const app = express();
const publicDirectoryPath = path.join(__dirname, '../Public');
app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');


app.get('/', function (req, res) {
  res.render('index',{
    title:"Home",
    name: "Amr"
  })
})

app.get('/about', function (req, res) {
    res.send('<h1>Hello from about page</h1>');
  })

app.listen(3000, () => {
    console.log (" The server is runing on port 3000");
})