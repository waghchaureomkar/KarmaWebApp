import React from 'react'
import { Col, Row ,Image} from 'react-bootstrap'
import img from "../Images/profile4.jpg"

function About() {
    return (
        <div className="about" id="aboutus">
            <div className='container'>
                <Row>
                    <Col xs={5} className="head">
                        <h1>ABOUT US</h1>
                    </Col>
                    <Col xs={2} className="div2" >
                        <div>
                        <Image src={img} className="img" />
                        <h6>Linda CEO</h6>
                        </div>
                    </Col>
                    <Col xs={5}>
                    <p>Lorem ipsum dolor sit amet. Ex perspiciatis voluptatum ut consectetur consequatur id porro vero. Vel alias dicta ex galisum voluptatem qui repellendus sunt. Eum dolorum autem et velit ipsa quo consequatur dolorum.
                    </p>
                    <p>Lorem ipsum dolor sit amet. Ex perspiciatis voluptatum ut consectetur consequatur id porro vero. Vel alias dicta ex galisum voluptatem qui repellendus sunt. Eum dolorum autem et velit ipsa quo consequatur dolorum.
                    </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default About
