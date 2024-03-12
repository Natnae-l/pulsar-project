const express = require('express');
const Client= require('pulsar-client');

const app = express();
const port = 3000;

require('dotenv').config()

const client = new Client.Client({
  serviceUrl: 'pulsar://localhost:6650',
});

app.get('/', async (req, res) => {

    client.createProducer({
        topic: 'data',
      }).then(producer => {
        const msg = `my----message ${process.env.i}`;
        process.env.i++
        producer.send({
            data: Buffer.from(msg),
          })
        
      }).catch(err => console.log(err))

      res.send('pulsar message activated')
});

app.listen(port, () => {
  console.log(`Example consumer listening at http://localhost:${port}`);
});