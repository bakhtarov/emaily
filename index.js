const express = require('express');
const app = express();


//app.get == route handler
app.get('/', (req, res) => {
  res.send({ port: process.env.PORT });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);