import { Rotate90DegreesCcw, RotateLeft, Scale } from "@mui/icons-material";
import { Container, Typography, Box, createTheme } from "@mui/material";

const Nearby = ({ properties }) => {
  console.log(properties);

  const theme = createTheme();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        [theme.breakpoints.down("md")]: {
          overflow: "scroll",
        },
      }}
    >
      {properties.hits?.map((property) => (
        <Box
          sx={{
            padding: "10px",
          }}
          key={property.id}
        >
          <img
            height="100px"
            width="150px"
            src={property.coverPhoto.url}
            alt="cover photo"
            style={{
              borderRadius: "5px",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
          <Typography>{property.cityName}</Typography>
        </Box>
      ))}
    </Container>
  );
};

export default Nearby;
