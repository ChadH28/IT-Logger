const express = require('express');
const data = require('./data');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 5000  // You can add a comment here why you want to use 4000.

app.listen(PORT, () => {console.log(`SERVER STARTED AT LOCALHOST:${PORT}`)});


// Init Middleware
app.use(express.json({extended:false}));


// getting data from the database from data.js
app.get('/api/logs', (req,res) => {
    const logs = data.logs
        res.send(logs);
});

app.get('/api/techs', (req,res) => {
  const techs = data.techs
      res.send(techs);
});


app.get('/api/logs/:id', (req,res) => {
    const logId = req.params.id;
    const log = data.logs.find(x => x._id === logId)
    if(log)
        res.send(log);
    else
        res.status(404).send({msg: "Log not found."})
});

app.get('/api/techs/:id', (req,res) => {
  const techId = req.params.id;
  const tech = data.techs.find(x => x._id === techId)
  if(tech)
      res.send(tech);
  else
      res.status(404).send({msg: "Tech not found."})
});


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('build'));
  
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname,'build', 'index.html'))
    );
}