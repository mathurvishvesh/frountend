import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProductCard.css'
import { Link } from 'react-router-dom';


function ProjectCard({ product }) {
  // const [count, setcount] = useState(0);
  // const HandleClick = () => {

  //   setcount(count + 1);
  // }
  // const handleremove = () => {

  //   if (count > 0)
  //     setcount(count - 1);
  //   else if (count < 0)
  //     setcount(0);
  // }

  return (

    <div>

      <Card className='boder' style={{ width: '18rem' }}>
        <Link to={`/product/${product.id}`}>
          <Card className='border' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.imgsrc} />
          </Card>
        </Link>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.desc}
          </Card.Text>

          {/* <div className='d-flex button'> */}

          {/* <Button className='sizee' onClick={HandleClick} variant="primary">{product.btn}</Button>
          <Button className='sizee' onClick={handleremove} variant="primary">{product.btn_2}</Button> */}
          {/* {count} */}

          {/* </div> */}


          <Button><Card.Link className='button' href="#">{product.btn}</Card.Link></Button>
          <Button><Card.Link href="#">{product.btn_2}</Card.Link></Button>


        </Card.Body>
      </Card>
    </div >
  )
}

export default ProjectCard
