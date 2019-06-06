import React from 'react';
import PropTypes from 'prop-types';
import './ball.scss';

class Ball extends React.Component {
  static propTypes = {
    singleStudent: PropTypes.object,
  }

  render() {
    const { singleStudent } = this.props;

    const student = this.props.singleStudent;

    if (Object.keys(student).length > 0) {
      return (
        <div className="ball">
          <div className="reservoir">
            <div className="d20">
              <div className="answer">
                <a className="name" href={singleStudent.linkedIn} target="_blank">{singleStudent.firstName}
                  <br/>{singleStudent.lastName}
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } return (
        <div className="ball">
          <div className="reservoir">
          </div>
        </div>
    );
  }
}

export default Ball;
