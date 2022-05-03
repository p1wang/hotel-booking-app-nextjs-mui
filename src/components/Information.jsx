import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Information() {
  return (
    <Container>
      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        {data.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Typography variant="h6" sx={{ fontWeight: "500" }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "light" }}>
              {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const data = [
  {
    id: 1,
    title: "Provides global hotel search",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus totam aperiam ad, tempore quisquam numquam laboriosam, quos voluptatum vero dolorum porro eaque rerum et excepturi quasi eius facilis enim exercitationem suscipit tenetur laudantium corrupti. Est, voluptatum! Quibusdam aut earum facere rem et dolorum, voluptate modi commodi incidunt, necessitatibus reiciendis perspiciatis itaque eius, exercitationem quas illum illo beatae voluptas inventore sunt praesentium aliquid quisquam alias animi! Mollitia neque aut, tempore provident ipsum ut et odit expedita deleniti, quibusdam dolore quae rerum molestiae sapiente illo? Sapiente officiis nihil quos nobis quod, molestiae, aperiam nostrum, ipsum voluptate quia facilis! Repudiandae saepe fugiat quisquam!",
  },
  {
    id: 2,
    title: "Find hotels that suits you at your favourite destinations",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus totam aperiam ad, tempore quisquam numquam laboriosam, quos voluptatum vero dolorum porro eaque rerum et excepturi quasi eius facilis enim exercitationem suscipit tenetur laudantium corrupti. Est, voluptatum! Quibusdam aut earum facere rem et dolorum, voluptate modi commodi incidunt, necessitatibus reiciendis perspiciatis itaque eius, exercitationem quas illum illo beatae voluptas inventore sunt praesentium aliquid quisquam alias animi! Mollitia neque aut, tempore provident ipsum ut et odit expedita deleniti, quibusdam dolore quae rerum molestiae sapiente illo? Sapiente officiis nihil quos nobis quod, molestiae, aperiam nostrum, ipsum voluptate quia facilis! Repudiandae saepe fugiat quisquam!",
  },
  {
    id: 3,
    title: "What the reviews are saying",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus totam aperiam ad, tempore quisquam numquam laboriosam, quos voluptatum vero dolorum porro eaque rerum et excepturi quasi eius facilis enim exercitationem suscipit tenetur laudantium corrupti. Est, voluptatum! Quibusdam aut earum facere rem et dolorum, voluptate modi commodi incidunt, necessitatibus reiciendis perspiciatis itaque eius, exercitationem quas illum illo beatae voluptas inventore sunt praesentium aliquid quisquam alias animi! Mollitia neque aut, tempore provident ipsum ut et odit expedita deleniti, quibusdam dolore quae rerum molestiae sapiente illo? Sapiente officiis nihil quos nobis quod, molestiae, aperiam nostrum, ipsum voluptate quia facilis! Repudiandae saepe fugiat quisquam!",
  },
  {
    id: 4,
    title: "How to book",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus totam aperiam ad, tempore quisquam numquam laboriosam, quos voluptatum vero dolorum porro eaque rerum et excepturi quasi eius facilis enim exercitationem suscipit tenetur laudantium corrupti. Est, voluptatum! Quibusdam aut earum facere rem et dolorum, voluptate modi commodi incidunt, necessitatibus reiciendis perspiciatis itaque eius, exercitationem quas illum illo beatae voluptas inventore sunt praesentium aliquid quisquam alias animi! Mollitia neque aut, tempore provident ipsum ut et odit expedita deleniti, quibusdam dolore quae rerum molestiae sapiente illo? Sapiente officiis nihil quos nobis quod, molestiae, aperiam nostrum, ipsum voluptate quia facilis! Repudiandae saepe fugiat quisquam!",
  },
];
