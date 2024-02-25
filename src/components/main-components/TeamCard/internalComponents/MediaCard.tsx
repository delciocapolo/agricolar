import { CSSProperties, FC } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { IMediaCard } from "../interfaces/interface";
import { z } from "zod";
import { AlertTitle } from "@mui/material";

const MediaCard: FC<IMediaCard> = ({ media, url }) => {
  const size = 20;
  const urlSchema = z.string().url().safeParse(url);
  const iconSchema: CSSProperties = {
    fill: "var(--White)",
    stroke: "none",
  };

  const handleClose = (e: any) => {
    const parentA = e.target.parentNode;
    const parentB = parentA.parentNode;
    const parentC = parentB.parentNode;
    const parentD = parentC.parentNode;
    parentD.classList.toggle("d-none");
  };

  if (!urlSchema.success) {
    return (
      <Stack
        sx={{
          position: "fixed",
          top: "20px",
          right: "7px",
          zIndex: 3,
          minWidth: "267px",
        }}
        spacing={2}
      >
        <Alert severity="warning" onClose={handleClose}>
          <AlertTitle>{media} - link inválido</AlertTitle>o link fornecido para
          o {media} é inválido
        </Alert>
      </Stack>
    );
  }

  return (
    <a href={url} target="_blank" className="container-media-card d-flex">
      {media === "facebook" && <Facebook style={iconSchema} size={size} />}
      {media === "twitter" && <Twitter style={iconSchema} size={size} />}
      {media === "instagram" && <Instagram size={size} />}
      {media === "linkedin" && <Linkedin size={size} />}
    </a>
  );
};

export default MediaCard;
