import {
  Box,
  Container,
  createTheme,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";

import GiftCard from "../../components/GiftCard";

const prices = [15, 25, 50, 100, 200, 250];

export default function Gifts() {
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container disableGutters>
      <Box textAlign="center" sx={{ paddingTop: "3rem" }}>
        <Typography
          sx={{
            fontSize: "10rem",
            lineHeight: "100%",
            paddingTop: 3,
            [theme.breakpoints.down("md")]: {
              fontSize: "8rem",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "5rem",
            },
          }}
        >
          Generic gift cards
        </Typography>
        <Box
          sx={{
            height: "700px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              height: "500px",
            },
          }}
        >
          <Box
            sx={{ transform: "rotate(20deg)", width: isMobile ? "60%" : "40%" }}
          >
            <GiftCard item={20} />
          </Box>
          <Box
            sx={{ transform: "rotate(20deg)", width: isMobile ? "60%" : "40%" }}
          >
            <GiftCard item={50} />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
        }}
      >
        <Box sx={{ flexBasis: "50%" }}>
          <Typography variant="h3" fontWeight="light">
            Generic
          </Typography>
          <Typography variant="h3" fontWeight="light">
            Gift Cards
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
              <Typography> Learn More</Typography>
            </MuiLink>
          </Link>
        </Box>
      </Box>

      <Grid
        container
        sx={{
          margin: "80px 0px",
        }}
      >
        {prices.map((item) => (
          <Grid
            item
            key={item}
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              [theme.breakpoints.down("sm")]: {
                marginLeft: 8,
                marginRight: 8,
              },
            }}
          >
            <GiftCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
