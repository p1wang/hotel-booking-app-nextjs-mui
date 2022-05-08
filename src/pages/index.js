import { Box, Divider } from "@mui/material";

import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Slogan from "../components/Slogan";
import Offers from "../components/Offers";
import Information from "../components/Information";

import calgaryPhoto from "../assets/images/cities/calgary.png";
import montrealPhoto from "../assets/images/cities/montreal.jpeg";
import ottawaPhoto from "../assets/images/cities/ottawa.jpeg";
import quebecPhoto from "../assets/images/cities/quebec.webp";
import torontoPhoto from "../assets/images/cities/toronto.webp";
import vancouverPhoto from "../assets/images/cities/vancouver.jpeg";
import winnipegPhoto from "../assets/images/cities/winnipeg.jpeg";
import PopularCities from "../components/PopularCities";

console.log(calgaryPhoto);

export default function Home({ properties }) {
  return (
    <>
      <Box sx={{ paddingTop: 1, paddingBottom: 1 }}>
        <Slogan />
      </Box>

      <Hero />
      <Box sx={{ paddingTop: 3, paddingBottom: 3 }}>
        <PopularCities properties={sampleProperties} />
      </Box>

      <Divider variant="middle" sx={{ width: "80%", margin: "auto" }} />

      <Box sx={{ paddingTop: 3, paddingBottom: 3 }}>
        <Partners />
      </Box>

      <Divider variant="middle" sx={{ width: "80%", margin: "auto" }} />

      <Box sx={{ paddingTop: 3, paddingBottom: 3 }}>
        <Offers />
      </Box>

      <Divider variant="middle" sx={{ width: "80%", margin: "auto" }} />

      <Box sx={{ paddingTop: 3, paddingBottom: 3 }}>
        <Information />
      </Box>
    </>
  );
}

const sampleProperties = {
  hits: [
    {
      id: 10000,
      coverPhoto: calgaryPhoto,
      cityName: "Calgary",
    },
    {
      id: 10001,
      coverPhoto: torontoPhoto,
      cityName: "Toronto",
    },
    {
      id: 10002,
      coverPhoto: vancouverPhoto,
      cityName: "Vancouver",
    },
    {
      id: 10003,
      coverPhoto: montrealPhoto,
      cityName: "Montreal",
    },
    {
      id: 10004,
      coverPhoto: quebecPhoto,
      cityName: "Quebec City",
    },
    {
      id: 10005,
      coverPhoto: winnipegPhoto,
      cityName: "Winnipeg",
    },
    {
      id: 10006,
      coverPhoto: ottawaPhoto,
      cityName: "Ottawa",
    },
  ],
};
