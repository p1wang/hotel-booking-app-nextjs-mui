import { useState } from "react";
import {
  Divider,
  Paper,
  Box,
  IconButton,
  Container,
  useMediaQuery,
} from "@mui/material";
import { createTheme } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

import RoomPicker from "../components/RoomPicker";
import DatePicker from "../components/DatePicker";
import SearchField from "../components/SearchField";

const roomType = [
  {
    value: "Adults",
    label: "Adults",
  },
  {
    value: "Children",
    label: "Children",
  },
  {
    value: "Rooms",
    label: "Rooms",
  },
];

export default function Search() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("test");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {};

  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 2,
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            p: "2px 4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 240,
          }}
        >
          <SearchField />
        </Box>

        {!isMobile && (
          <Divider orientation="vertical" variant="middle" flexItem />
        )}

        <DatePicker label={"Start date"} />

        {!isMobile && (
          <Divider orientation="vertical" variant="middle" flexItem />
        )}

        <DatePicker label={"End date"} />

        {!isMobile && (
          <Divider orientation="vertical" variant="middle" flexItem />
        )}

        <RoomPicker />

        {!isMobile && (
          <Divider orientation="vertical" variant="middle" flexItem />
        )}
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon fontSize="large" />
        </IconButton>
      </Paper>
    </Container>
  );
}
