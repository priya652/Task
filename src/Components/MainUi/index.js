import React from "react";
import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import PostCard from "./components/PostCard";
import SideCard from "./components/SideCard";
import Header from "./components/Header";

const MainUi = () => {
  return (
    <Grid container bgcolor='#F5F5F5'>
        <Grid item height={64} width='100%' position='sticky' top={0} zIndex={999}>
      <Header />
        </Grid>
      <Grid container item  width='100%' height='calc(100% - 64px)'>
        <Grid item width='240px'>
          <Sidebar />
        </Grid>
        <Grid item container 
        p={1}
        sx={{
        width:'calc(100% - 240px)',
        }}
        spacing={1}
        >
            <Grid item xs={12} lg={8}>
          <PostCard />
            </Grid>
        <Grid item xs={12} lg={4}>
          <SideCard/>
        </Grid>
        </Grid>
      </Grid>
      </Grid>
    
  );
};

export default MainUi;