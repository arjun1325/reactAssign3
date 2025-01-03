import React from "react";
import { useState } from "react";
import ProductCard from "./products";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import axios from "axios";
function ProductList() {
    const [products, setProducts] = useState([])

axios.get("https://fakestoreapi.com/products").then((res) => {
setProducts(res.data)})

    
    return (
        <>

            <Container>
                <h2>Product Listing</h2>

                <section>
                    <Row>
                       
                        {products.map((product, index) => {
                            return(
                            <Col className="" sm={12} md={6} lg={3} key={index}>
                                <ProductCard productInfo={product} />
                            </Col>
                            )
                        })}
                        
                    </Row>
                </section>
            </Container>
        </>
    );
}

export default ProductList;
