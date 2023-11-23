import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
// import './GiftCard.css'
import ProductCard_2 from './ProductCard_2';

const GiftCard = () => {
    return (
        <div>

            <Container>
                <br></br>

                <h3>Brand Store</h3>
                <Row>
                    <Col >
                        <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/6a5c52eb-b9bf-4e29-867a-c7894d3270b3/amul-hp_brandStorefront_m_480_250723_01.jpg?tr=w-1920,q=80" thumbnail />
                    </Col>
                    <Col >
                        <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/6a5c52eb-b9bf-4e29-867a-c7894d3270b3/dettol-hp_brandStorefront_m_480_250723_02.jpg?tr=w-1920,q=80" thumbnail />
                    </Col>
                    <Col >
                        <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/6a5c52eb-b9bf-4e29-867a-c7894d3270b3/coca-cola-hp_brandStorefront_m_480_250723_03.jpg?tr=w-1920,q=80" thumbnail />
                    </Col>
                    <Col >
                        <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/6a5c52eb-b9bf-4e29-867a-c7894d3270b3/loreal-hp_brandStorefront_m_480_250723_04.jpg?tr=w-1920,q=80" thumbnail />
                    </Col>
                    <Col >
                        <a href=''>   <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/6a5c52eb-b9bf-4e29-867a-c7894d3270b3/Baulli_hp_brandStorefront_m_480_250723_05.jpg?tr=w-1920,q=80 " thumbnail /> </a>
                    </Col>
                    <Col >
                        <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/6a5c52eb-b9bf-4e29-867a-c7894d3270b3/durex-hp_brandStorefront_m_480_250723_06.jpg?tr=w-1920,q=80" thumbnail />
                    </Col>


                </Row>

                {/* <h3>Product</h3> */}
                {/* <Row>
          <Col xs={6} md={4}>
            <ProductCard_2 />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-fruits_480_250923.jpg?tr=w-1920,q=80" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_cuts-&-exotics_480_250923.jpg?tr=w-1920,q=80 " thumbnail />
          </Col>
        </Row> */}

            </Container>



        </div>
    )
}

export default GiftCard
