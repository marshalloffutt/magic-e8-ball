import React from 'react';
import Ball from '../components/Ball/ball';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="Ball">
        <Ball />
      </div>
    );
  }
}

export default App;
