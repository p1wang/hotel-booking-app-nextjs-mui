import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import React from "react";

export default function Offers() {
  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ flexBasis: "50%" }}>
          <Typography variant="h3" fontWeight="light">
            Check out
          </Typography>
          <Typography variant="h3" fontWeight="light">
            Latest offers!
          </Typography>
        </Box>
        <Box sx={{ flexBasis: "50%" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "light", paddingBottom: 2 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
            impedit.
          </Typography>
          <Link href={"/"} passHref>
            <MuiLink sx={{ fontSize: 20 }}>
              <Typography>Learn More</Typography>
            </MuiLink>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
