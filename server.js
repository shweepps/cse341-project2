const express = require('express');
const mongodb = require('./db/connection');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000


app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header','Origin, X-Requested-With, Content-Type, Accept, Z-Key');
    res.setHeader('Access-Control_Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use ('/', require('./routes'));


mongodb.initDb((err) => {
  if (err) {
    console.error(err);
  } else {
    app.listen(port, () => console.log(`DB connected. Server running on port: ${port}`));
  }
});


app.listen(port, () => {console.log('Running on port ' + port)})

