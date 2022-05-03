import { Box, Button } from "@mui/material";
import Offers from "../../components/Offers";
import Information from "../../components/Information";
import PopularCities from "../../components/PopularCities";
import Search from "../../components/Search";
import Discover from "../../components/Discover";
import { useState } from "react";
import { useMediaQuery, createTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
      coverPhoto: {
        url: "https://propelenergytech.com/wp-content/uploads/2017/02/Calgary-Skyline-w.-Vignette.jpg",
      },
      cityName: "Calgary",
    },
    {
      id: 10001,
      coverPhoto: {
        url: "https://www.travelanddestinations.com/wp-content/uploads/2017/08/Toronto-Skyline-at-Sunset.jpg",
      },
      cityName: "Toronto",
    },
    {
      id: 10002,
      coverPhoto: {
        url: "https://static.temblor.net/wp-content/uploads/2021/03/vancouver-4585887_960_720.jpg",
      },
      cityName: "Vancouver",
    },
    {
      id: 10003,
      coverPhoto: {
        url: "https://media.istockphoto.com/photos/cityscape-reflection-of-montreal-city-picture-id172414141?k=20&m=172414141&s=612x612&w=0&h=t3IN13ZFVP35xduExMHAheE5xv5IayjOrCWG8PNmnZU=",
      },
      cityName: "Montreal",
    },
    {
      id: 10004,
      coverPhoto: {
        url: "https://www.worldatlas.com/r/w1200/upload/8a/bd/38/shutterstock-154975961.jpg",
      },
      cityName: "Quebec City",
    },
    {
      id: 10005,
      coverPhoto: {
        url: "https://www.winnipegperiodontist.com/wp-content/uploads/2017/01/winnipeg-skyline-canada.jpg",
      },
      cityName: "Winnipeg",
    },
    {
      id: 10006,
      coverPhoto: {
        url: "https://media.istockphoto.com/photos/scenic-water-view-of-parliament-hill-ottawa-ontario-canada-picture-id147454466?k=20&m=147454466&s=612x612&w=0&h=D13Hnnl_w0QIryV_8jTepPxGzE3OYIbhIypILZo4vcI=",
      },
      cityName: "Ottawa",
    },
  ],
};
