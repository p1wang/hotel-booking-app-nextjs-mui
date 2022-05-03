import {
  Container,
  Typography,
  Paper,
  Button,
  Box,
  createTheme,
} from "@mui/material";

import { useRouter } from "next/router";

const data = [
  { tageLine: "Things to do on your trip" },
  { tageLine: "Places to stay on your trip" },
];

export default function Discover() {
  const router = useRouter();
  const theme = createTheme();

  return (
    <Container>
      <Typography variant="h4" fontWeight="light">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          marginTop: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((item) => (
          <Paper
            key={item.tageLine}
            elevation={3}
            sx={{
              width: "550px",
              aspectRatio: "1.2/1",
              borderRadius: 3,
              backgroundImage: `url(${"/lake.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              opacity: "90%",
              color: "white",
              position: "relative",
              [theme.breakpoints.down("lg")]: {
                width: "60%",
              },
              [theme.breakpoints.down("sm")]: {
                width: "100%",
              },
            }}
          >
            <Typography
              sx={{
                typography: {
                  position: "absolute",
                  top: "10%",
                  margin: "1rem",
                },
              }}
              variant="h2"
              fontWeight="500"
            >
              {item.tageLine}
            </Typography>
            <Button
              variant="contained"
              sx={{
                position: "absolute",
                top: "50%",
                margin: "1rem",
              }}
              onClick={() => router.push("/blog")}
            >
              Discover
            </Button>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}
