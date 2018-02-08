import React, { Component } from 'react';
import './VideoLogo.css';

class VideoLogo extends Component {
  render() {
    return (
      <div className="container-fluid logo-container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 view hm-pink-slight jarallax" data-jarallax='{"speed": 0.2}'>
            <div className="embed-responsive embed-responsive-1by1">
              <video loop muted autoPlay poster="video/plane.jpg" className="embed-responsive-item">
                <source src="video/logo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      );
  }
}

export default VideoLogo;
