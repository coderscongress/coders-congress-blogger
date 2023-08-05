import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export class VisionAccordion extends Component {
    render() {
        return (
            <>
                <div align="center">
                    <Accordion>
                        
                        <Card>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick="">
                                Vision
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>My vision is to ...</Card.Body>
                            </Accordion.Collapse>
                        </Card>
						
                    </Accordion>
                </div>
            </>
        );
    }
}

export default VisionAccordion;