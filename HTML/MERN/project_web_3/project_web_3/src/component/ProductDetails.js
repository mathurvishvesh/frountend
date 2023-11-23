import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../utils/data';
import NavBar from './NavBar';
import Fotter from './Fotter';
import ProjectCard from './ProductCard';
import Product_dis from './Product_dis';

const ProductDetails = () => {
    const { id } = useParams(); // Get the 'id' parameter from the URL

    // Find the product that matches the 'id' from the URL
    const product = data.find((item) => item.id === parseInt(id));
    // console.log(product);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <NavBar />
            <Product_dis key={product.id} product={product} />
            <Fotter />
        </div>
    );
}

export default ProductDetails;
