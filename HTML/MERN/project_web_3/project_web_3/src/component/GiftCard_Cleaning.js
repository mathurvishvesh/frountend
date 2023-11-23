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
                <h3>Cleaning and HouseHold</h3>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYOsK2TAQAlQ5UmfEa7ThCf8IKk5FcHNc4dw-qQ2mqkdGHiupPtKPdGIE12voyEhwVdE&usqp=CAU" thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYOsK2TAQAlQ5UmfEa7ThCf8IKk5FcHNc4dw-qQ2mqkdGHiupPtKPdGIE12voyEhwVdE&usqp=CAU" thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYOsK2TAQAlQ5UmfEa7ThCf8IKk5FcHNc4dw-qQ2mqkdGHiupPtKPdGIE12voyEhwVdE&usqp=CAU" thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYOsK2TAQAlQ5UmfEa7ThCf8IKk5FcHNc4dw-qQ2mqkdGHiupPtKPdGIE12voyEhwVdE&usqp=CAU" thumbnail />
                    </Col>


                </Row>



            </Container>



        </div>
    )
}

export default GiftCard
