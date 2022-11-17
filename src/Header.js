import React, { Component } from 'react';
import { Text, Container, Row, Col } from "@nextui-org/react";

const Header = () => (
    <Container >
        <Row gap={13} >
            <Col>
                <Text
                    h1
                    size={140}
                    css={{

                        pt: 30,
                        textGradient: "45deg, $blue600 -20%, $cyan600 50%",
                    }}
                    weight="light"
                >
                    This is
                </Text>

                <Text
                    h1
                    size={140}
                    css={{

                        pt: 10,

                        textGradient: "45deg, $green600 -20%, $blue600 100%",
                    }}
                    weight="medium">
                    About Me
                </Text>
            </Col>

        </Row>
    </Container>
)
export default Header;

