import React from 'react';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className='container'>
        <img className="logo animated shake w-95" src="https://github.com/marshalloffutt/magic-e8-ball/blob/master/src/images/magic_8ball_final.png?raw=true" alt="Magic E-8 Ball"></img>
      </div>
    );
  }
}

export default Header;
