import React, { useState , useEffect} from 'react';
import {
  Nav}
from 'react-bootstrap';

const Navigation = () => {

  return(
    <div>
      <Nav className="navbar" defaultActiveKey="/" as="ul">

        <Nav.Item as="li">
          <Nav.Link href="/">Accueil</Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link eventKey="link-2" href="/references">References</Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link eventKey="link-5" href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
export default Navigation;

