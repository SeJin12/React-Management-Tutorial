import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [{
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

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
