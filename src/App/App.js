import React from 'react';
import { Button } from 'reactstrap';
import Ball from '../components/Ball/ball';
import connection from '../helpers/data/connection';
import getStudents from '../helpers/data/studentRequests';
import superComplexAlgorithm from '../helpers/superComplexAlgorithm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends React.Component {
  state = {
    students: [],
    singleStudent: {},
  }

  componentDidMount() {
    connection();
    getStudents()
      .then((students) => {
        this.setState({ students });
      })
      .catch(err => console.error('error in getting students', err));
  }

  getSingleStudent = (e) => {
    const { students } = this.state;
    const person = superComplexAlgorithm(students);
    this.setState({ singleStudent: person });
  }

  render() {
    const { singleStudent } = this.state;

    return (
      <div className="App">
        <Button
          color="danger"
          onClick={this.getSingleStudent}
          >Click Me!</Button>
        <Ball
          singleStudent = {singleStudent}
        />
      </div>
    );
  }
}

export default App;
