import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { typeHandler } from "../utils/TypeHandler";

export default function PokemonCard({ name, img, types, id }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="220" image={img} alt={name} />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop={-1}
          >
            <Typography gutterBottom variant="h5" component="div" textTransform="capitalize">
              {name}
            </Typography>
            <Typography gutterBottom variant="body2" component="div" color={"grey"} marginLeft={"1em"}>
          #{id}
            </Typography>
          </Box>
          <Box  display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop={-1}>
            <Typography gutterBottom variant="caption" component="div" textTransform="capitalize">
              {typeHandler(types)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
