import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import './bg.css';
// import Image from 'react-bootstrap/Image';

class Backgroundimg extends Component {
    render() { 
        return <>
              <div className="image">
              <h1 className="name">BASSANT MAHER</h1>
              <div className="left">
              <Button variant="outline-light">CV DOWNLOAD</Button>{' '}
              </div>
              </div>
           
        </>;
    }
}
 

export default Backgroundimg;