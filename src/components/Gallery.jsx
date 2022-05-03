import * as React from "react";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Container, createTheme, useMediaQuery, Skeleton } from "@mui/material";

const Gallery = () => {
  const theme = createTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <ImageList cols={isSmall ? 2 : isMedium ? 3 : 5} gap={20}>
        {data.map((item) => (
          <ImageListItem key={item.id}>
            {isLoading ? (
              <Skeleton variant="rectangular" width={220} height={300} />
            ) : (
              <img
                style={{ borderRadius: "10px" }}
                src={`${item.src}?w=220&h=300&fit=crop&auto=format`}
                srcSet={`${item.src}?w=220&h=300&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            )}

            <ImageListItemBar
              title={item.title}
              subtitle={<span>From ${item.price} CAD/person</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

const data = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    price: 50,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    price: 50,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    price: 50,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    price: 125,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    price: 100,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    price: 75,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    price: 50,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    price: 100,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    price: 80,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    price: 40,
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    price: 130,
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    price: 120,
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    price: 150,
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    price: 100,
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    price: 50,
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    price: 150,
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    price: 80,
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    price: 100,
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    price: 60,
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    price: 80,
  },
  {
    id: 21,
    src: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    price: 40,
  },
  {
    id: 22,
    src: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    price: 100,
  },
  {
    id: 23,
    src: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    price: 50,
  },
  {
    id: 24,
    src: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    price: 80,
  },
  {
    id: 25,
    src: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    price: 150,
  },
];

export default Gallery;
