import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard(props) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.productInfo.image} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{props.productInfo.title}</Card.Title>
                <Card.Text>{props.productInfo.description}</Card.Text>
                <Card.Text>$ : {props.productInfo.price}</Card.Text>
                <Link to={`/productinfo/${props.productInfo.id}`}>  
                    <Button variant="primary">View More</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default ProductCard; // export the ProductCard component
