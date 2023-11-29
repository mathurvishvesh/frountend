import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Veg_C2({ product }) {
    return (

        <div className="col-xs-6 col-sm-3 mt-5">
            <div className="tcb-Veg_card-item">

                <Link to={`/product/${product.id}`}>
                    <div className="tcb-product-photo">
                        <a href="#"><img src={product.imgsrc} className="img-responsive" alt="a" /></a>
                    </div>
                </Link>

                <div className="tcb-product-info">
                    <div className="tcb-product-title">
                        <h4><a href="#">{product.title} </a></h4></div>

                    <div className="tcb-product-price">
                        {product.cost}
                    </div>


                    <div className="d-grid gap-2 button" >
                        <Button variant="primary" className='text' >
                            <Link to="/buy"> {product.btn}
                            </Link></Button>
                        <Button variant="secondary" className='text'>
                            <Link to="/card">{product.btn_2}
                            </Link></Button>
                    </div>



                </div>
            </div>
        </div>






    )
}

export default Veg_C2
