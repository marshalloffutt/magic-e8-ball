import React from 'react';
import Ball from '../components/Ball/ball';
import connection from '../helpers/data/connection';
import getStudents from '../helpers/data/studentRequests';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    connection();
    getStudents()
      .then((students) => {
        this.setState({ students });
      })
      .catch(err => console.error('error in getting students', err));
  }

  render() {
    return (
      <div className="Ball">
        <Ball />
      </div>
    );
  }
}

export default App;
