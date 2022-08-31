import React from 'react'
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Navbar } from "@nextui-org/react";
import env from "react-dotenv";
const Homepage = () => {
    return (
        <Container gap={0}>
            {env.SERVER_NAME}
            <Card>
                <Card.Body>
                    <Text h6 size={15} color="white" css={{ m: 0 }}>
                        1 of 2
                    </Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Homepage