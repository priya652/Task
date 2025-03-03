import React from "react";
import { Card, CardContent, CardMedia, Avatar, Typography, IconButton } from "@mui/material";
import { AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { FaEllipsisH } from "react-icons/fa";

const Main = () => {
  return (
    <Card style={{ width: 620, borderRadius: 10, margin: "20px auto" }}>
      <CardContent style={{ display: "flex", alignItems: "center" }}>
        <Avatar alt="User" src="https://via.placeholder.com/40" style={{ marginRight: 10 }} />
        <div style={{ flexGrow: 1 }}>
          <Typography variant="h6">Lara Leones</Typography>
          <Typography variant="body2" color="textSecondary">@street4art</Typography>
        </div>
        <IconButton>
          <FaEllipsisH />
        </IconButton>
      </CardContent>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <b>Read More</b>
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="300"
        image="https://via.placeholder.com/620x300" // Replace this with your image
        alt="Post Image"
      />
      <CardContent style={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton>
          <AiOutlineHeart /> 9.8k
        </IconButton>
        <IconButton>
          <AiOutlineComment /> 8.6k
        </IconButton>
        <IconButton>
          <AiOutlineShareAlt /> 7.2k
        </IconButton>
      </CardContent>
    </Card>
  );
};
export default Main;
