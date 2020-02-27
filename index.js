require('newrelic');
const axios = require('axios');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3001;

app.use(morgan('dev')); // for logging http requests to the terminal
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public')); // for serving static files

// Calendar Proxy Response
// app.get('/month', (req, res) => {
//     axios.get('http://3.16.164.208:3001', {
//       params: req.query
//     })
//     .then(({ data }) => {
//       res.json(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   });

// Image Carousel Proxy Response
app.get('/listing/:id/images', (req, res) => {
  axios.get(`http://localhost:3000/listing/${req.params.id}/images`)
    .then(({ data }) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// // Reviews Proxy Response
// app.get('/api/0', (req, res) => {
//   axios.get(`http://13.57.226.2:3003/:3003/api/0`)
//   .then(({ data }) => {
//     res.json(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// });

// // Recommendations Proxy Response
// app.get('/listings', (req, res) => {
//   axios.get(`http://52.53.211.102:3002/`)
//   .then(({ data }) => {
//     res.json(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// });


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
})
