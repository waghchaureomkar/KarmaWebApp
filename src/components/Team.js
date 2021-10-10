import React from 'react'
import { Col, Row ,Image} from 'react-bootstrap'
import img1 from "../Images/profile1.jpg"
import img2 from "../Images/profile2.jpg"
import img3 from "../Images/profile3.jpg"

function Team() {
    return (
        <div className="about" id="aboutus">
            <div className='container'>
                <Row>
                    <Col xs={7} className="profiles" >
                        <div>
                            <Image src={img1} className="img" />
                            <h6>Nancy</h6>
                            <h6>Manager</h6>
                        </div>
                        <div>
                            <Image src={img2} className="img" />
                            <h6>Mary</h6>
                            <h6>Designer</h6>
                        </div>
                        <div>
                            <Image src={img3} className="img" />
                            <h6>Helen</h6>
                            <h6>Artist</h6>
                        </div>
                    </Col>
                    <Col xs={5} className="head">
                        <h1>OUR TEAM</h1>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Team
