import React from "react";
import { Col, Row, Container, ProgressBar } from "react-bootstrap";
import c from "./images/team/c.jpg";
import b from "./images/team/b.jpg";
import a from "./images/team/a.jpg";
import "./Team.css";

const Items = (props) => {
    return (
        <div style={{marginTop: "50pt", background: "#9b00fb", padding: "40pt", borderRadius: "0"}}>
            <Container>
                        <img alt={props.alt} src={props.img} style={{ borderRadius: "70pt" }} />

                        <Container className="mt-4 text-white">
                            <h1 className="navbar-brand">{props.name}</h1>
                            <p><p>{props.text}</p></p>
                        </Container>
            </Container>
        </div>
    )
}

const Team = () => {
    return (
        <>
        <button id="Team" className="btn-dark butt mr-auto ml-4 mt-4">Our Hardworking Team</button>
        <div className="team" style={{ padding: "10pt 10pt"}}>
            
            <Container>
            <Row>
                <Col md="4">
                <Items img={a} name="Jain Smith" text="lorem ipsum dolor sit amet" />
                </Col>

                <Col md="4">
                <Items img={b} name="Jain Smith" text="lorem ipsum dolor sit amet" />
                </Col>
                
                <Col md="4">
                <Items img={c} name="Jain Smith" text="lorem ipsum dolor sit amet" />
                </Col>
            </Row>
            </Container>

        

        </div>

        <div className="col-md-12" style={{background: "rgb(245 245 245 / 43%)", padding: "80pt 0pt"}}>
        <Container style={{maxWidth: "800pt", marginTop: "100pt"}}>
            
            <Row>
            <Col md="7">
                <Container className="mt-4" style={{borderRadius: "20pt"}}>
                    <h1 className="display-6">What We Do</h1>
                    <p className="">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>

                </Container>
                <button className="butt mt-4">Design</button>
                <button className="butt">Marketing</button>
                <button className="butt">Development</button>
                <button className="butt">Photography</button>
                </Col>

                <Col md="5">
                <Container className="mt-4" style={{ textAlign: "left"}}>
                    <p>Design</p>
                    <ProgressBar variant="dark" id="progress" now={80} /><br />
                    <p>Marketing</p>
                    <ProgressBar variant="dark" id="progress" now={50} /><br />
                    <p>Development</p>
                    <ProgressBar variant="dark" id="progress" now={75} /><br />
                    <p>Photography</p>
                    <ProgressBar variant="dark" id="progress" now={86} />
                </Container>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    );
}

export default Team;
