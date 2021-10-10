import React from 'react'
import { Col, Row,Image } from 'react-bootstrap'
import pencil from "../Images/pencil.png"
import setting from "../Images/setting.png"
import signal from "../Images/signal1.png"

function Services() {
    return (
        <div className="services" id='services'>
            <div className='container'>
                <Row>
                    <Col xs={5} className="serviceshead">
                        <h1>SERVICES</h1>
                    </Col>
                    <Col xs={2} >
                        <div className="servicediv">
                            <div className="divclip1"><Image src={pencil} className="clip"/></div>
                            <div className="divclip"><Image src={setting} className="clip"/></div>
                            <div className="divclip"><Image src={signal} className="clip"/></div>
                        </div>
                    </Col>
                    <Col xs={5} className="servicediv3">
                        <h4>Web  Design</h4>
                        <p>Lorem ipsum dolor sit amet. Ex perspiciatis voluptatum ut consectetur consequatur id porro vero. Vel alias dicta ex galisum voluptatem qui repellendus sunt. Eum dolorum autem et velit ipsa quo consequatur dolorum.
                        </p>
                        <p>Lorem ipsum dolor sit amet. Ex perspiciatis voluptatum ut consectetur consequatur id porro vero. Vel alias dicta ex galisum voluptatem qui repellendus sunt.
                        </p>
                    </Col>
                </Row>
            </div> 
        </div>
    )
}

export default Services