import { Container, Grid } from "@mui/material";
import Image from "next/image";

import westjet from "../assets/images/logos/westjet.svg";
import travelAdvisors from "../assets/images/logos/travel-advisors-1.svg";
import food from "../assets/images/logos/food.svg";
import henrosaHotel from "../assets/images/logos/henrosa-hotel.svg";
import tobysBar from "../assets/images/logos/toby-s-bar-restaurant.svg";
import fourSeasons from "../assets/images/logos/four-seasons.svg";
import callaway from "../assets/images/logos/callaway-golf.svg";
import iams from "../assets/images/logos/iams-pet-foods.svg";

const Partners = () => {
  // console.log(iams);
  const partners = [
    westjet,
    travelAdvisors,
    food,
    henrosaHotel,
    tobysBar,
    fourSeasons,
    callaway,
    iams,
  ];

  return (
    <Container maxWidth="md">
      <Grid container spacing={1} sx={{ textAlign: "center" }}>
        {partners.map((partner) => (
          <Grid item key={partner.src} xs={3} md={3}>
            <Image
              objectFit="contain"
              height="100px"
              width="100px"
              src={partner}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Partners;
