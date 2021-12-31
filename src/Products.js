import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import "./style.css";

const Cards = (props) => {
    return ( 
            <Col className="mt-4">
                
                <Card id="cards">
                <h1>{props.text}</h1>
                </Card>
            </Col>
     );
}
 
const Products = () => {
    return ( 
        <>
            <div class="products mt-4">
                <Container>
                    <h1 className="text">Lorem ipsum dolor sit amet</h1>
                    <h1 className="display-6">Products</h1>
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
 
export default Products;