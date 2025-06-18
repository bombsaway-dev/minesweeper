import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';


import { Link } from "react-router-dom";
import { Carousel, Container, Row, Col, Nav, Navbar, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

function tutorial() {
  return (
    <Carousel>
        <h3>How to play</h3>
        <Carousel.Item>
            <img src="" alt="" className = "carouselImg" />
            <Carousel.Caption>
                <p>Bombs are hidden on the map! Right click to flag a square you think has a bomb.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="" alt="" className = "carouselImg" />
            <Carousel.Caption>
                <p>Safe squares have a number, meaning the square is touching that number of bombs.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="" alt="" className = "carouselImg" />
            <Carousel.Caption>
                <p>Left click a safe square to declare it safe and to reveal its number.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="" alt="" className = "carouselImg" />
            <Carousel.Caption>
                <p>Left clicking a bomb ends the game.</p>
                <p>Flag all the bombs to win!</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    
  );
}

export default tutorial;
