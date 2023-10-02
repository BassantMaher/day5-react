import React, {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';

function Movies() {
    // useState
    const [tvTitle, setTvTitle] = useState('breaking bad');
    //  di ka2eny olt fel class component
    // this.state = (
    //     tvTitle ={}
    // );
    // useEffect
    return <>
         <div className="row">
                <div className="col-lg-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    {/* BINDING  */}
                    <Card.Title>{tvTitle}</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>
                </div>
           
            </div>
    </>;
}

export default Movies;