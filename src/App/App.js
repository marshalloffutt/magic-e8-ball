import React from 'react';
import { Button } from 'reactstrap';
import Ball from '../components/Ball/ball';
import connection from '../helpers/data/connection';
import getStudents from '../helpers/data/studentRequests';
// import randomizer from '../helpers/randomizer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import randomizer from '../helpers/randomizer';

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
    const person = randomizer(students);
    console.log(person);
    this.setState({ singleStudent: person });
  }

  render() {
    const { singleStudent } = this.state;

    // const getSingleStudent = () => {
    //   const allStudents = this.state.students;
    //   randomizer(allStudents)
    //     .then((myStudent) => {
    //       this.setState({ singleStudent: myStudent });
    //     });
    // };

    return (
      <div className="App">
        <Button
          color="danger"
          // students={students}
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
