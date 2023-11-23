import React from 'react';
import data_vegetable from '../utils/data_vegetables';
import Veg_C2 from './Veg_C2';
import { useParams } from 'react-router-dom';

const Veg_map = () => {
    const { id } = useParams(); // Get the 'id' parameter from the URL

    // Find the product that matches the 'id' from the URL
    const product_veg = data_vegetable.find((item) => item.id === parseInt(id));

    // if (!product_veg) {
    //     return <div>Product not found</div>;
    // }

    return (
        <div className='container'>
            <h2><b>Best Sellers</b> </h2><br></br>
            <div className='row'>
                {data_vegetable.map((product_veg) => (
                    <Veg_C2
                        key={product_veg.id}
                        product_veg={product_veg}
                        title={product_veg.title}
                        imgsrc={product_veg.imgsrc}

                    />
                ))}
            </div>
        </div>
    );
};

export default Veg_map;