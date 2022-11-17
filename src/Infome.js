import { Container, Card, Row, Text } from "@nextui-org/react";
import React, { Component } from 'react';
const Infome = () => (

    <Container xs css={{ pl: "120px", pt: "50px" }}>
        <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
                <Row justify="center" align="center">
                    <Text h6 size={20} color="white" css={{ m: 0 }}>
                        NextUI gives you the best developer experience with all the features
                        you need for building beautiful and modern websites and
                        applications.
                    </Text>
                </Row>
            </Card.Body>
        </Card>
    </Container >
)
export default Infome;