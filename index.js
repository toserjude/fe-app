const express = require('express');
const app = express();
const cors = require('cors');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors());

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.use(express.static('./dist/fe-app'));
