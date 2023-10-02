import React, {Component} from "react";
import "./about.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class About extends Component {
    render() { 
        return <>
             <Container className="addmargin">
      <Row>
        <Col xs={6} md={6} lg={6}>
          <h1 className="centeredt"> ABOUT ME</h1>
        </Col>
        <Col xs={6} md={6} lg={6}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non nunc interdum, vestibulum nisi et </p>
        </Col>
      </Row>

      
    </Container>
        </>;
    }
}
 
export default About;