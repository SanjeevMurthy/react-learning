import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
  render(){
    return (
      <div>
        <h1>About</h1>
        <p>This application is built for learning purose and it uses:</p>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>React-Router</li>
          <li>Webpack</li>
          <li>Bootstrap-3</li>
        </ul>
      </div>
    );
  }
}

export default AboutPage;
