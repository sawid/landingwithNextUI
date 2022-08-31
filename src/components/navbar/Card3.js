import React from 'react'
import { Text } from "@nextui-org/react";
import env from "react-dotenv";

const Card3 = () => {
  return (
    <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        มาสร้างประสบการณ์ที่สุดยอดไปด้วยกันกับ { env.SERVER_NAME }
      </Text>
  )
}

export default Card3