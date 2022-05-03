import { Container, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";

import logo from "../assets/images/generic-logo.svg";

const SloganSection = () => {
  return (
    <Container sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ paddingRight: 2 }}>
        <Image src={logo} height="150px" width="160px" alt="logo" />
      </Box>
      <Divider orientation="vertical" variant="middle" flexItem />

      <Box sx={{ paddingLeft: 2 }}>
        <Typography variant="h4" fontWeight="light">
          Deals from your favourite booking sites
        </Typography>
        <Typography variant="body2">
          Try searching for a city, a specific hotel, or even a landmark!
        </Typography>
      </Box>
    </Container>
  );
};

export default SloganSection;
