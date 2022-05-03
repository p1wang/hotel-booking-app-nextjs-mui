import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchField() {
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={topCities.map((option) => option.name)}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
  );
}

const topCities = [
  { name: "Calgary", country: "Canada" },
  { name: "Toronto", country: "Canada" },
  { name: "Vancouver", country: "Canada" },
  { name: "Montreal", country: "Canada" },
  { name: "Quebec City", country: "Canada" },
  { name: "Winnipeg", country: "Canada" },
  { name: "Ottawa", country: "Canada" },
];
