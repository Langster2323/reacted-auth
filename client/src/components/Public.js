import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Courses extends Component {
  render() {
    return (
      <div className="bounds">
        <Link to="/dashboard">
          <div className="element">
            <h1 className="circle-txt">Health Curve</h1>
          </div>
        </Link>
        
      </div>
    );
  }
}
