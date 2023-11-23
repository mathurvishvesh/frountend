import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import data from '../utils/data_Beverages';

const Beverages_map = () => {
    return (
        <div>
            <Container>
                <br></br>
                <h3>Beverages</h3>
                <Row>
                    {data.map(item => (
                        <div className='col-ms-4 col-lg-4'>
                            <Col key={item.id} >
                                <Image src={item.img} thumbnail />
                            </Col>
                        </div>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Beverages_map;
