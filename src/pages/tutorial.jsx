import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import tut1 from '../assets/tut-ss-1.png';
import tut2 from '../assets/tut-ss-2.jpg';
import tut3 from '../assets/ss-tut-3.png';
import tut4 from '../assets/tut-ss-4.jpg';


import { Link } from "react-router-dom";
import { Carousel, Container, Row, Col, Nav, Navbar, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';


function Tutorial() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

  return (
    <div className = "tutorialContainer">
    
    <Card className = "tutorialCard">
        <h3>How to play</h3>
    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
        <Carousel.Item>
            <img src={tut1} alt="" className = "carouselImg" />
            <div className="custom-caption">
                <p>Bombs are hidden on the map! Right click to flag a square you think has a bomb.</p>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <img src={tut2} alt="" className = "carouselImg" />
            <div className="custom-caption">
                <p>Safe squares have a number, meaning the square is touching that number of bombs.</p>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <img src={tut3} alt="" className = "carouselImg" />
            <div className="custom-caption">
                <p>Left click a safe square to declare it safe and to reveal its number.</p>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <img src={tut4} alt="" className = "carouselImg" />
            <div className="custom-caption">
                <p>Left clicking a bomb ends the game. Flag all the bombs to win!</p>
            </div>
        </Carousel.Item>
    </Carousel>
    </Card>
    </div>
  );
}

export default Tutorial;
