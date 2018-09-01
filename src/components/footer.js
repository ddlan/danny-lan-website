import React, { Component } from 'react';
import ScrollButton from './scrollButton';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container footer-text">
          <div className="contact">
            <h4>Contact</h4>
            <ul class="list-unstyled">
              <li>Richmond Hill, Canada</li>
              <li>(647)-609-5406</li>
              <li>L.danny18725@gmail.com</li>
            </ul>
          </div>
          <div className="stay-connected">
            <h4>Stay Connected</h4>
            <ul class="list">
              <li><a href="https://github.com/ddlan">Github</a></li>
              <li><a href="https://www.linkedin.com/in/danny-lan/">Linkedin</a></li>
              <li><a href="https://www.facebook.com/danny.lan.18725">Facebook</a></li>
              <li><a href="https://www.instagram.com/danny.dl.lan/">Instagram</a></li>
            </ul>
          </div>
        </div>

        <hr></hr>

        <div class="copyright">
          <p>Danny Lan 2018</p>
          <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
        </div>

      </footer>
    );
  }
}

export default Footer;
