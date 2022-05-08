import { Box, Button } from "@mui/material";
import Offers from "../../components/Offers";
import Information from "../../components/Information";
import PopularCities from "../../components/PopularCities";
import Search from "../../components/Search";
import Discover from "../../components/Discover";
import { useState } from "react";
import { useMediaQuery, createTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import calgaryPhoto from "../../assets/images/cities/calgary.png";
import montrealPhoto from "../../assets/images/cities/montreal.jpeg";
import ottawaPhoto from "../../assets/images/cities/ottawa.jpeg";
import quebecPhoto from "../../assets/images/cities/quebec.webp";
import torontoPhoto from "../../assets/images/cities/toronto.webp";
import vancouverPhoto from "../../assets/images/cities/vancouver.jpeg";
import winnipegPhoto from "../../assets/images/cities/winnipeg.jpeg";

export default function Flights({ properties }) {
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showSearchBar, setShowSearchbar] = useState(true);

  return (
    <>
      {isMobile && (
        <Box sx={{ textAlign: "center" }}>
          <Button
            onClick={() => setShowSearchbar((showSearchBar) => !showSearchBar)}
          >
            <KeyboardArrowDownIcon />
          </Button>
        </Box>
      )}

      {(!showSearchBar || !isMobile) && (
        <Box sx={{ paddingTop: 3, paddingBottom: 3 }}>
          <Search />
        </Box>
      )}

      <Box sx={{ paddingTop: 3, paddingBottom: 3 }}>
        <Offers />
      </Box>
      <Box sx={{ paddingTop: 3, paddingBottom: 3 }}>
        <PopularCities properties={sampleProperties} />
      </Box>
      <Box sx={{ paddingTop: 3, paddingBottom: 3 }}>
        <Discover />
      </Box>
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
