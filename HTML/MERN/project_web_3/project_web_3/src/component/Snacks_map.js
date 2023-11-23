import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import data from '../utils/data_snacks';



const Snacks_map = () => {
    return (
        <div>


            <div>
                <Container>
                    <br></br>
                    <h3>Snacks</h3>
                    <Row>
                        {data.map(item => (
                            <div className='col-ms-3 col-lg-3'>
                                <Col key={item.id} >
                                    <Image src={item.img} thumbnail />
                                </Col>
                            </div>
                        ))}
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Snacks_map

