import {
  Container,
  Box,
  Typography,
  Grid,
  Stack,
  createTheme,
} from "@mui/material";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import Image from "next/image";

import logo from "../assets/images/generic-logo.svg";

const pages = [
  "Products",
  "Pricing",
  "Blog",
  "Contact",
  "Deals",
  "Careers",
  "News",
  "Press",
  "Help",
];

const Footer = () => {
  const theme = createTheme();

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        position: "relative",
        backgroundColor: "black",
        "& *": { color: "white" },
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            position: "static",
            padding: "20px 0px",

            textAlign: "center",
          }}
        >
          <Grid item xs={12}>
            <Box
              sx={{
                width: "70%",
                margin: "auto",
                display: "flex",
                justifyContent: "space-around",
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                },
              }}
            >
              <Link href="/" passHref>
                <MuiLink underline="none">
                  <Stack direction="row" justifyContent="center" gap={1}>
                    <PhoneIphoneOutlinedIcon sx={{ display: "inline-block" }} />
                    <Typography>App</Typography>
                  </Stack>
                  <Typography variant="body2">
                    Sign up for our latest offers
                  </Typography>
                </MuiLink>
              </Link>
              <Link href="/" passHref>
                <MuiLink underline="none">
                  <Stack direction="row" justifyContent="center" gap={1}>
                    <EmailOutlinedIcon sx={{ display: "inline-block" }} />
                    <Typography>Email</Typography>
                  </Stack>
                  <Typography variant="body2">Download the app</Typography>
                </MuiLink>
              </Link>
              <Link href="/" passHref>
                <MuiLink underline="none">
                  <Stack direction="row" justifyContent="center" gap={1}>
                    <CardGiftcardOutlinedIcon
                      sx={{ display: "inline-block" }}
                    />
                    <Typography>Rewards</Typography>
                  </Stack>
                  <Typography variant="body2">
                    Join now and collect rewards
                  </Typography>
                </MuiLink>
              </Link>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              padding: "20px 0px",
              alignSelf: "end",
              borderBottom: "1px solid black",
              borderColor: "white",
            }}
          >
            <Grid container>
              {pages.map((item) => (
                <Grid item xs={4} key={item}>
                  <Typography variant="body2">{item}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{ paddingTop: 2 }}>
            <Image src={logo} width="160px" height="80px" />
          </Grid>
          <Grid item xs={12} sx={{ paddingBottom: 1 }}>
            <Typography>&copy;2022 Hotels, LLC. All Rights Reserved</Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Footer;
