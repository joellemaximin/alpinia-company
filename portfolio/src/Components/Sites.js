import React from 'react';
import {ListGroup} from 'react-bootstrap';
import "./sites.css";

const Sites = () => {


return (
  <div className="global-variante">
    <h3 className="title">Ce que nous proposons: <span></span> </h3>
    <div className="variante">
      <ListGroup variant="flush" >
        <ListGroup.Item>Site Vitrine</ListGroup.Item>
        <ListGroup.Item>E-Commerce</ListGroup.Item>
        <ListGroup.Item>Amélioration d'un site exitant</ListGroup.Item>
        <ListGroup.Item>Catalogue</ListGroup.Item>
        <ListGroup.Item>Blog</ListGroup.Item>
      </ListGroup>
    </div>
    
  </div>
  )
}
export default Sites;
