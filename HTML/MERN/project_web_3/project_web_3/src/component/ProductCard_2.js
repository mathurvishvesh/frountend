import React from 'react'
import './ProductCard_2.css'

const ProductCard_2 = () => {
    return (
        <div className=''>
            <div className="container">
                {/* <h1>News Card</h1> */}
                <div className="cardcontainer">
                    <div className="photo">
                        <img src="https://images.pexels.com/photos/2346006/pexels-photo-2346006.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" />
                        <div className="photos">Photos</div>
                    </div>
                    <div className="content">
                        <p className="txt4">City Lights In Newyork</p>
                        <br></br>
                        <p className="txt2">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                    </div>
                    <div className="footer">
                        <p><a className="waves-effect waves-light btn" href="#">Buy Now</a><a id="heart"><span className="like"><i className="fab fa-gratipay" />Like</span></a></p>
                        <p className="txt3"><i className="far fa-clock" />10 Minutes Ago <span className="comments"><i className="fas fa-comments" />45 Comments</span></p>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default ProductCard_2
