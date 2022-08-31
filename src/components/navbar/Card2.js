import React from 'react'
import { Card, Col, Row, Button, Text, Grid } from "@nextui-org/react";

const Card2 = () => {
    return (
        <Card css={{ bg: "$black", w: "100%" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        ตะลุยในโลกกว้าง
                    </Text>
                    <Text h4 color="white">
                        สุดขอบล่าแห่ง Five M
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image
                src="https://cdn.mos.cms.futurecdn.net/YhtXxZXN6zM5qLDBxSBpp8.jpg"
                width="100%"
                height="100%"
                objectFit="cover"
                alt="Card image background"
            />
        </Card>
    )
}

export default Card2