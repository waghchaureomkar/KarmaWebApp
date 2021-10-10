import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from "../Images/landscape1.jpg"
import img2 from "../Images/landscape2.jpg"
import img3 from "../Images/landscape3.jpg"

function Home() {
    return (
        <div className="container" id="home">

        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
               
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel"
                src={img2}
                alt="Second slide"
                />

                <Carousel.Caption>
          
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel"
                src={img3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            
        </div>
    )
}

export default Home
