import { Container } from "@mui/material";

import React from "react";

export default function Hero() {
  return (
    <Container
      maxWidth="false"
      sx={{
        backgroundImage: `url(${"/hotel.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "600px",
        width: "100%",
      }}
    ></Container>
  );
}
