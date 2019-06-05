import React from 'react';
import { Button } from 'reactstrap';
import Ball from '../components/Ball/ball';
import connection from '../helpers/data/connection';
import getStudents from '../helpers/data/studentRequests';
import randomizer from '../helpers/randomizer';
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

  getSingleStudent() {
    const allStudents = this.state.students;
    randomizer(allStudents)
      .then((singleStudent) => {
        this.setState({ singleStudent });
      });
  }

  render() {
    const { students, singleStudent } = this.state;

    return (
      <div className="App">
        <Button
          color="danger"
          students={students}
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
