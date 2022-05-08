import { Container, Typography, Box, createTheme } from "@mui/material";
import Image from "next/image";

const PopularCities = ({ properties }) => {
  // console.log(properties);

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
        <Box sx={{ margin: "10px" }} key={property.id}>
          <Box
            sx={{
              borderRadius: "5px",
              overflow: "hidden",
              cursor: "pointer",
              width: "150px",
              height: "100px",
              position: "relative",
            }}
          >
            <Image
              src={property.coverPhoto}
              alt="cover photo"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Typography>{property.cityName}</Typography>
        </Box>
      ))}
    </Container>
  );
};

export default PopularCities;
