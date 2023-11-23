import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import data from '../utils/data_staples';



const Daily_Staples_map = () => {
    return (
        <div>
            <div>
                <Container>
                    <br></br>
                    <h3>Daily Staples</h3>
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
        </div>
    )


}

export default Daily_Staples_map

