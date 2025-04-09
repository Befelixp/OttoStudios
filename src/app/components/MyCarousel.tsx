"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Image from "next/image";

export default function Example(props: any) {
  var items = [
    {
      img: "/images/IMG_3899.png",
    },
    {
      img: "/images/IMG_3838.png",
    },
    {
      img: "/images/IMG_3837.png",
    },
    {
      img: "/images/IMG_3830.png",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: any) {
  return (
    <Paper>
      <Image
        src={props.item.img}
        alt="carousel"
        width={600}
        height={800}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
    </Paper>
  );
}
