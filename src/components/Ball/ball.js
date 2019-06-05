import React from 'react';
import './ball.scss';

class Ball extends React.Component {
  render() {
    return (
        <div className="ball">
          <div className="reservoir">
            <div className="d20">
              <div className="answer">
                <p>FIRSTNAME
                  <br/>LASTNAME
                </p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Ball;
