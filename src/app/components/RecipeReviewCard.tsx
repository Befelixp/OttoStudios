import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import "../styles/buttons.css";
import { Button } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({
  title,
  subheader,
  image,
  materials,
}: {
  title: string;
  subheader: string;
  image: string;
  materials: string;
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "0px 0vw 0.75rem #61BB46",
        marginBottom: "2.5rem",
        "&:hover": {
          boxShadow: "0px 0vw 1.5rem #61BB46",
          transition: "0.8s",
          "& .image-container img": {
            transform: "scale(1.1)", // Aumenta o tamanho da imagem em 10%
          },
        },
      }}
    >
      <CardHeader title={title} subheader={subheader} />
      <div
        className="image-container"
        style={{
          height: "194px", // Altura fixa para a imagem
          overflow: "hidden", // Oculta o excesso da imagem
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            transition: "transform 0.3s ease-in-out",
            width: "100%", // Garante que a imagem ocupe toda a largura do contêiner
            height: "100%", // Garante que a imagem ocupe toda a altura do contêiner
            objectFit: "cover", // Corta a imagem para preencher o contêiner
          }}
        />
      </div>
      <CardActions disableSpacing>
        <Button
          color="secondary"
          sx={{
            "&:hover": {
              backgroundColor: "#61BB46",
              color: "#000",
              transition: "0.8s",
            },
          }}
        >
          SELECIONAR PLANOS
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{materials}</CardContent>
      </Collapse>
    </Card>
  );
}
