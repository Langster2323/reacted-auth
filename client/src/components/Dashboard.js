import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserMd, faHistory, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faHeart, faUser, faUserMd, faHistory, faGraduationCap)

export default class Dashboard extends Component {
  render() {
    return (
      <div className="cards-container">
        <div className="card-intro-wrapper">
        <div className="card-intro">
          <span className="welcome">Welcome to Health Curve!</span>
          <span className="intro-body">Health Curve is created for those who need the latest medical information.</span>
          <span className="intro-body">Let's stay ahead of the curve together!</span>
        </div>
        </div>
        
        <button className="current-card">
          <div className="card-content-container">
            <FontAwesomeIcon className="heart-icon" icon={faHeart} size="3x" />
            <div className="card-content">
              <div className="card-col">
                <span className="card-title">
                  Current
                </span>
                <span className="card-body">
                  What's happening now?
                </span>
                <span className="card-body">
                  What kind of diseases are spreading?
                </span>
              </div>
            </div>
          </div>
        </button>
        <button className="for-kids-card">
          <div className="card-content-container">
            <FontAwesomeIcon className="for-kids-icon" icon={faUser} size="3x" />
            <div className="card-content">
              <div className="card-col">
                <span className="card-title">
                  For Kids
                </span>
                <span className="card-body">
                  What kind of sysmptoms kids have?
                </span>
                <span className="card-body">
                  See most common ones here
                </span>
              </div>
            </div>
          </div>
        </button>
        <button className="future-card">
          <div className="card-content-container">
            <FontAwesomeIcon className="future-icon" icon={faUserMd} size="3x" />
            <div className="card-content">
              <div className="card-col">
                <span className="card-title">
                  Potencial Future
                </span>
                <span className="card-body">
                  We can protect ourselves from
                </span>
                <span className="card-body">
                  unexpected viruses. Be prepared.
                </span>
              </div>
            </div>
          </div>
        </button>
        <button className="history-card">
          <div className="card-content-container">
            <FontAwesomeIcon className="history-icon" icon={faHistory} size="3x" />
            <div className="card-content">
              <div className="card-col">
                <span className="card-title">
                  History
                </span>
                <span className="card-body">
                  Let's go back and see what happended in
                </span>
                <span className="card-body">
                  the world.
                </span>
              </div>
            </div>
          </div>
        </button>
        <button className="education-card">
          <div className="card-content-container">
            <FontAwesomeIcon className="education-icon" icon={faGraduationCap} size="3x" />
            <div className="card-content">
              <div className="card-col">
                <span className="card-title">
                  Education
                </span>
                <span className="card-body">
                  Always good to learn about our health
                </span>
                <span className="card-body">
                  problems. Stay healthy and stay safe.
                </span>
              </div>
            </div>
          </div>
        </button>
      </div>
    );
  }
}
