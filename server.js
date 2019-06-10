const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send(
        [{
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': 'A',
            'birthday': '1',
            'gender': 'M',
            'job': 'student'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'B',
            'birthday': '2',
            'gender': 'W',
            'job': 'student'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': 'C',
            'birthday': '3',
            'gender': 'M',
            'job': 'student'
          }]
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));