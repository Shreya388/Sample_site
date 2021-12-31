import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import "./style.css";

const Cards = (props) => {
    return ( 
            <Col className="mt-4">
                
                <Card id="cards">
                </Card>
            </Col>
     );
}
 
const Portfolio = () => {
    return ( 
        <>
            <div class="portfolio mt-4">
                <Container>
                    <h1 className="text">Lorem ipsum dolor sit amet</h1>
                    <h1 className="display-6">Portfolio/ Case Studios</h1>
                <Row>
                    <Cards />
                    <Cards />
                    <Cards />
                </Row>
                </Container>
            </div>
        </>
     );
}
 
export default Portfolio;