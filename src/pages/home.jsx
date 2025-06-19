import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';




import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

function home() {
  return (
   <div>
   <h1>Bombs Away</h1>
    <Link to ="/tutorial">How to play</Link>
    </div>
  );
}

export default home;
