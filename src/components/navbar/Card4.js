import React from 'react'
import { Card, Col, Text } from "@nextui-org/react";

const Card4 = () => {
    return (
        <Card>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        ตกอยู่ในห้วงภวังค์
                    </Text>
                    <Text h4 color="white">
                        เมืองที่น่าหลงไหล
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image
                src="https://cdn.wallpapersafari.com/99/26/NZ2tLI.jpg"
                objectFit="cover"
                width="100%"
                height={340}
                alt="Card image background"
            />
        </Card>
    )
}

export default Card4