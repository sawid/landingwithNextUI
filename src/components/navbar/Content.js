import { Spacer, Grid } from "@nextui-org/react"
import { Box } from "./Box.js"
import Card1 from "./Card1.js";
import Card2 from "./Card2.js";
import Card3 from "./Card3.js";

import env from "react-dotenv";
import Card4 from "./Card4.js";

export const Content = () => (
    <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
        <Grid.Container gap={2} justify="center">
            <Grid xs={12} sm={12}>
                <Card3 />
            </Grid>
            <Grid xs={12} sm={12}>
                <Card4 />
            </Grid>
            <Grid xs={12} sm={6}>
                <Card1 />
            </Grid>
            <Grid xs={12} sm={6}>
                <Card2 />
            </Grid>
        </Grid.Container>
    </Box>
);
