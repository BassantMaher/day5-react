import React, {Component} from "react";
import "./skills.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar'

class Skills extends Component {
    render() { 
        return <>
        <Container className="container2 w-100">
        <Row>
           <Col xs={12} md={12} lg={12}>
            
                 <h1 className="center">MY SKILLS</h1>
            </Col>
           </Row>
           <Row>
            <Col xs={12} md={12} lg={12}>
            <p className="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            </Col>
           </Row>
           <Row>
            <Col xs={6} md={6} lg={6}>
                <h4 className="center underline">MY FOCUS</h4>
                <h6 className="center space">UI/UX design</h6>
                <h6 className="center space">UI/UX design</h6>
                <h6 className="center space">UI/UX design</h6>
                <h6 className="center space">UI/UX design</h6>
            </Col>
            <Col xs={5} md={5} lg={5} className="spacel">
                <ProgressBar className="space ProgressBar" now={90} label={`HTML`} />
                <ProgressBar className="space ProgressBar" now={95} label={`CSS`} />
                <ProgressBar className="space ProgressBar" now={100} label={`BOOTSTRAP`} />
                <ProgressBar className="space ProgressBar" now={40} label={`REACT`} />
                <ProgressBar className="space ProgressBar" now={80} label={`PROBLEM SOLVING`} />
            </Col>
           </Row>
        </Container>
           
        </>;
    }
}
 export default Skills;