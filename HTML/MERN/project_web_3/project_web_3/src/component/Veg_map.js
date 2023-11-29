import React from 'react';
import data_vegetable from '../utils/data_vegetables';
import Veg_C2 from './Veg_C2';
// import { useParams } from 'react-router-dom';

const Veg_map = () => {

    return (
        <div className='container'>
            <h2><b>Best Sellers</b> </h2><br></br>
            <div className='row'>
                {data_vegetable.map(product =>
                    <Veg_C2
                        product={product}

                    />

                )}


            </div>
        </div>
    );
};

export default Veg_map;