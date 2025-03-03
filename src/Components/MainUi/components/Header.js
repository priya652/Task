import React from "react";
import { Typography, Avatar, IconButton, Grid, Box, Stack } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";

const Header = () => (
    <Grid container width='100%' display='flex' flexWrap='nowrap' position='sticky' top={0} bgcolor='#F5F5F5'>
        <Grid item width={240} pb={1}>
            <Box bgcolor='#fff' p={2} position='sticky' borderRadius={4}>
                <Typography variant="inherit" fontSize={32} >LOGO</Typography>
            </Box>
        </Grid>
        <Grid item container width='calc(100% - 240px)' >
            <Grid item xs={8} px={2}>
            <Box bgcolor='#fff' p={3} position='sticky' display='flex' alignItems='center' justifyContent='space-between' borderRadius={4}>
                <Stack direction='row' spacing={1}>
                    <CiSearch fontSize={18} color="#303030"/>
                    <Typography variant="inherit" color="#9A9A9E">Search...</Typography>
                </Stack>
                <Stack direction='row' spacing={1} color='#303030'>
                    <IoReorderThreeOutline fontSize={18} />
                    <Typography variant="inherit" color="#303030">Filters</Typography>
                </Stack>
            </Box>
            </Grid>
        <Grid item xs={4} pr={2}>
            <Box bgcolor='#88C2BB'  position='sticky' borderRadius={4} p={3}>
                <Typography variant="inherit" color="#fff">Become a Seller</Typography>
            </Box>
        </Grid>
        </Grid>
    </Grid >

);

export default Header;