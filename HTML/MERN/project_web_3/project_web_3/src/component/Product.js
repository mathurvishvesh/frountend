import React from 'react'
import ProjectCard from './ProductCard'
import data from "../utils/data"
import './Product.css'

const Product = () => {

  return (
    <div>
      <h2><b>Best Sellers</b> </h2><br></br>
      <div className='d-flex flex-wrap spaces' >

        {data.map((product) => {
          return <ProjectCard key={product.id} product={product} />
        })}
      </div>

    </div>
  )
}

export default Product
