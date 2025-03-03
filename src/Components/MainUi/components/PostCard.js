import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Typography, CardActions, IconButton, Box, Stack, Grid } from "@mui/material";
import { MdFavoriteBorder } from "react-icons/md";
import { PiShareFat } from "react-icons/pi";
import { IoMdMore } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { RiChat1Line } from "react-icons/ri";

const PostCard = () => {
    const imageData = [
        {
            profile: "https://images.pexels.com/photos/6706847/pexels-photo-6706847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Lara Leones",
            mail: "@thewallart",
            image: "https://images.pexels.com/photos/3068920/pexels-photo-3068920.jpeg",
            text: "A happy dog on a leash enjoying the park."
        },
        {
            profile: "https://images.pexels.com/photos/6706847/pexels-photo-6706847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Lara Leones",
            mail: "@thewallart",
            image: "https://images.pexels.com/photos/6706847/pexels-photo-6706847.jpeg",
            text: "A cozy evening with warm lights and a book."
        },
        {
            profile: "https://images.pexels.com/photos/6706847/pexels-photo-6706847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Lara Leones",
            mail: "@thewallart",
            image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
            text: "A beautiful sunset over the ocean."
        },
        {
            profile: "https://images.pexels.com/photos/6706847/pexels-photo-6706847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Lara Leones",
            mail: "@thewallart",
            image: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
            text: "A cute cat looking at the camera."
        }
    ];


    return (
        <Grid container >
            {imageData.map((item, index) => (
                <Grid item xs={12} key={index} p={1}>
                    <Box bgcolor='#fff' borderRadius='8px'>
                        <Stack direction='row' spacing={1} alignItems='center' py={1} px={2} justifyContent='space-between'>
                            <Stack direction='row' alignItems='center' spacing={1}>
                                <Box
                                    component="img"
                                    width={32}
                                    height={32}
                                    borderRadius={2}
                                    src={item.profile}
                                />
                                <Stack direction="column" lineHeight={0}>
                                    <Typography variant="subtitle1" lineHeight={1}>{item.name}</Typography>
                                    <Typography variant="body2" color="textSecondary" lineHeight={1}>
                                        {item.mail}
                                    </Typography>
                                </Stack>
                            </Stack>
                            <IoMdMore fontSize={18} />
                        </Stack>
                        <CardContent sx={{ padding: '8px 16px' }}>
                            <Typography variant="body2">
                                {item.text}                            </Typography>
                        </CardContent>
                        <CardMedia
                            sx={{ padding: '8px 16px' }}
                        >
                            <Box
                                component='img'
                                height={300}
                                width='100%'
                                src={item.image}
                                alt="img"
                                borderRadius={2}>
                            </Box>
                        </CardMedia>


                        <CardActions sx={{ borderTop: '1px solid #F3F3F3' }}>
                            <Box display='flex' gap={1} alignItems='center'>
                                <IconButton>
                                    <FiHeart fontSize={18} />
                                </IconButton>
                                <Typography>
                                    13
                                </Typography>
                            </Box>
                            <Box display='flex' gap={1} alignItems='center'>
                                <IconButton>
                                    <IoChatbubbleOutline fontSize={18} />
                                </IconButton>
                                <Typography>4</Typography>

                            </Box>
                            <Box display='flex' gap={1} alignItems='center'>

                                <IconButton>
                                    <PiShareFat fontSize={18} />
                                </IconButton>
                                <Typography>3</Typography>
                            </Box>

                        </CardActions>
                    </Box>
                </Grid>
            ))}
        </Grid>

    )
};

export default PostCard;