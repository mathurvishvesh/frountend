import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import './Vegetable_Slider.css'
// import 'bootstrap/dist/css/bootstrap.min.css ';
// import './GiftCard.css'
import ProductCard_2 from './ProductCard_2';

const GiftCard = () => {
    return (
        <div>

            <Container>
                <br></br>
                <h3>Top Offers</h3>
                <Row>
                    <Col >
                        <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/3c5df782-1789-4bea-8403-9fd766652b34/t1_hp_aff_m_sbi_360_251023.jpg?tr=w-1920,q=80" thumbnail />
                    </Col>
                    <Col >
                        <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/3c5df782-1789-4bea-8403-9fd766652b34/t1_hp_aff_m_mobikwik-10_360_251023.jpg?tr=w-1920,q=80" thumbnail />
                    </Col>
                    <Col >
                        <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/3c5df782-1789-4bea-8403-9fd766652b34/t1_hp_aff_m_icici_360_021123.jpg?tr=w-1920,q=80" thumbnail />
                    </Col>
                    <Col >
                        <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/3c5df782-1789-4bea-8403-9fd766652b34/t1_hp_aff_m_cred_360_251023.jpg?tr=w-1920,q=80" thumbnail />
                    </Col>
                </Row>




            </Container>



        </div>
    )
}

export default GiftCard
