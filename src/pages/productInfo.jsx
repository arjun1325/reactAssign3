import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductInfo() {
    const [productInfo, setProductInfo] = useState({});
    let { id } = useParams();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/"+id).then((res) => {
            setProductInfo(res.data);
        });
    }, []);
    return (
            <>
                <div>
                    <img src={productInfo.image} alt="product image" />
                    <h1>{productInfo.title}</h1>
                    <p>{productInfo.description}</p>
                    <p>{productInfo.price}</p>
                </div>
            </>
        );
}
export default ProductInfo;
