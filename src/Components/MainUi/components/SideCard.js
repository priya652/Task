import React from "react";
import { Card, CardHeader, List, ListItem, ListItemAvatar, Avatar, ListItemText, Stack, Box, Typography, Grid } from "@mui/material";

const SideCard = () => {

    const cards = [
        {
            profile: "https://images.pexels.com/photos/6706847/pexels-photo-6706847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Thomas Edward",
            mail: "@thomasart",
            image: "https://images.pexels.com/photos/6706847/pexels-photo-6706847.jpeg",
        },
        {
            profile: "https://images.pexels.com/photos/6706847/pexels-photo-6706847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Jessica Williams",
            mail: "@jessicaw",
            image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            profile: "https://images.pexels.com/photos/6706847/pexels-photo-6706847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Emilie Jones",
            mail: "@thewallart",
            image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
        },
        {
            profile: "https://images.pexels.com/photos/6706847/pexels-photo-6706847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Jessica Williams",
            mail: "@jessicaw",
            image: "https://images.pexels.com/photos/2526027/pexels-photo-2526027.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            profile: "https://images.pexels.com/photos/6706847/pexels-photo-6706847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Jessica Williams",
            mail: "@chrisdow",
            image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
        }
    ];

    return (
        <Grid container>
            <Grid item xs={12}>

                <Stack direction='row' p={1} spacing={2} position='sticky'>
                    <Typography variant="inherit" color="#000">
                        Artists
                    </Typography>
                    <Typography variant="inherit" color="#8D8D8D">
                        Photographers
                    </Typography>
                </Stack>
            </Grid>

            <Grid item xs={12} sx={{overflowY:'auto',height:'100vh'}}>
                {cards.map((item, index) => (
                    <Box position='relative' key={index} p={1}>
                        <Box
                            component="img"
                            width='100%'
                            height={180}
                            borderRadius={2}
                            src={item.image}
                        />
                        <Stack direction='row' alignItems='center' spacing={1} position='absolute' bottom={22} left={22}>
                            <Box
                                component="img"
                                width={32}
                                height={32}
                                borderRadius={2}
                                src={item.profile}
                                border='2px solid #fff'
                            />
                            <Stack direction="column" lineHeight={0} color='#fff' >
                                <Typography variant="subtitle1" lineHeight={1}>{item.name}</Typography>
                                <Typography variant="body2" lineHeight={1}>
                                    {item.mail}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                ))}
            </Grid>
        </Grid>

    );
}
export default SideCard;
