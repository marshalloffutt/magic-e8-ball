import React from 'react';
//import { Button } from 'reactstrap';
import Header from '../components/Header/Header';
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
        <Header />
        {/* <Button
          className="mt-4"
          color="danger"
          onClick={this.getSingleStudent}
          >Who should I hire?</Button> */}

                <div className="svg-wrapper" onClick={this.getSingleStudent}>
                <svg height="70" width="225" xmlns="http://www.w3.org/2000/svg">
                  <rect id="shape" height="40" width="225" />
                </svg>
                <div id="text">
                  <span className="spot">WHO SHOULD I HIRE?</span>
                </div>
</div>
        <Ball
          singleStudent = {singleStudent}
        />
      </div>

    );
  }
}

export default App;
