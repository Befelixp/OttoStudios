"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Image from "next/image";
import carousel1 from "../images/IMG_3899.png";
import carousel2 from "../images/IMG_3838.png";
import carousel4 from "../images/IMG_3837.png";
import carousel5 from "../images/IMG_3830.png";

export default function Example(props: any) {
  var items = [
    {
      img: carousel1,
    },
    {
      img: carousel2,
    },
    {
      img: carousel4,
    },
    {
      img: carousel5,
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
