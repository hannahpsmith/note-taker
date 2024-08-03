const express = require('express');
const html = require('./routes/htmlRoutes');
const api = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded( {extended: true }));

app.use(express.static('public'));

app.use('/api', api);
app.use('/', html);


app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}!`)
  );