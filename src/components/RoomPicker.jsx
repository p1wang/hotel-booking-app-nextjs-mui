import { Box, Button, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function RoomPicker() {
  const [options, setOptions] = useState([
    {
      item: "Adults",
      count: 2,
    },
    {
      item: "Children",
      count: 2,
    },
    {
      item: "Pets",
      count: 1,
    },
  ]);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 220 }}>
        <InputLabel id="demo-simple-select-label">Guests</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          multiple
          value={[options.reduce((n, { count }) => n + count, 0)]}
          label="Guests"
          renderValue={(selected) => `${selected} guests`}
          MenuProps={{
            PaperProps: {
              sx: {
                width: 350,
              },
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option.item}
              value={option.item}
              disableRipple
              style={{
                backgroundColor: "transparent",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box>
                  <Typography>{option.item}</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button sx={{ minWidth: 0 }}>
                    <RemoveCircleOutlineIcon />
                  </Button>

                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {option.count}
                  </Typography>

                  <Button
                    sx={{ minWidth: 0 }}
                    onClick={() => {
                      setOptions(
                        [...options].map((object) => {
                          if (object.item === option.item) {
                            return {
                              ...object,
                              count: option.count + 1,
                            };
                          } else return object;
                        })
                      );
                    }}
                  >
                    <AddCircleOutlineIcon />
                  </Button>
                </Box>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
