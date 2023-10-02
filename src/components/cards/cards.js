import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Cards extends Component {
    render() {
      const imagePaths = [
        '../images/OIP.jpeg',
        '../images/OIP (6).jpeg',
        '../images/OIP (5).jpeg',
        '../images/OIP (4).jpeg',
        '../images/OIP (3).jpeg',
        '../images/OIP (2).jpeg',
        '../images/OIP (1).jpeg',
      ];
  
      return (
        <>
         <Row>
        {imagePaths.map((path, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Img src={path} alt={`Image ${index + 1}`} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
        </>
      );
    }
  }
export default Cards;