import React, { useState , useEffect} from 'react';
import axios from 'axios';
import {Row, Col, FormControl, Image} from 'react-bootstrap';
import {
  Input,
  Form,
  FormGroup,
  Button}
from 'reactstrap';
import './footer.css';


const Footer = (props) => {



return (
  <div className="footer-page">
    <p> ©2020 Alpinia studio web</p>
    <p> alpiniastudioweb@gmail.com</p>

  </div>
  )
}
export default Footer;
