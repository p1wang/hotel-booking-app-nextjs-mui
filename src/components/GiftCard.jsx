import { Box, createTheme, Paper, Typography } from "@mui/material";
import Image from "next/image";

import logo from "../assets/images/generic-logo.svg";

export default function GiftCard({ item }) {
  const theme = createTheme();
  return (
    <Paper
      sx={{
        paddingLeft: 2,
        paddingRight: 2,
        margin: 2,
        width: "100%",
        aspectRatio: "1.59/1",
        borderRadius: 3,
        backgroundImage: `url(${"/lake.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "relative",
      }}
      elevation={3}
    >
      <Typography align="right" variant="h2" sx={{ color: "white" }}>
        {`$${item}`}
      </Typography>
      <Box
        sx={{
          margin: 1,
          position: "absolute",
          bottom: 0,
          left: 0,
          [theme.breakpoints.down("sm")]: {
            width: "20%",
            height: "20%",
          },
        }}
      >
        <Image src={logo} objectFit="cover" />
      </Box>
    </Paper>
  );
}
