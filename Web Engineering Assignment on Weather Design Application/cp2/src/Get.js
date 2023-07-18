import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
      <ul>
        {
          
          this.state.persons
            .map(person =>
              <li key={person.id}><b>Name :</b> {person.name} <br></br><b>Email :</b> {person.email} <br></br><b>Phone : </b>{person.phone} <br></br>
              <b>Street :</b>{person.address.street}<br></br> <b>Suite :</b>{person.address.suite}<br></br> <b>City :</b>{person.address.city}</li>
            )
            
        }
      </ul>
      
      </div>
    )
  }
}
