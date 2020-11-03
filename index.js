const express = require('express');

const app = express();

app.use(express.static('./dist/fe-app'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/fe-app/'}),
);

app.listen(process.env.PORT || 8080);
