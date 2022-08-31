import React from 'react'
import { Card, Col, Row, Button, Text, Grid } from "@nextui-org/react";
import env from "react-dotenv";

const Card1 = () => {
    return (

        <Card css={{ w: "100%", h: "400px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                        โลดแล่นไปกับ
                    </Text>
                    <Text h3 color="white">
                        ใช้ชีวิตในเมืองแห่งการผจญภัย
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="https://images4.alphacoders.com/587/587526.jpg"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt="Relaxing app background"
                />
            </Card.Body>

        </Card>

    )
}

export default Card1