import React, { useState } from "react"; 
import { Box, Drawer, List, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = [
        { text: "Home", icon: './images/home.svg' },
        { text: "Notifications", icon: './images/notification.svg' },
        { text: "Shop", icon: './images/favorite.svg' },
        { text: "Conversation", icon: './images/message.svg' },
        { text: "Wallet", icon: './images/wallet.svg' },
        { text: "Subscription", icon: './images/heart.svg' },
        { text: "My Profile", icon: './images/profile.svg' },
        { text: "Settings", icon: './images/setting.svg' }
    ];

    return (
        <Drawer 
            variant="permanent" 
            anchor="left" 
            sx={{ top: 64, justifyContent: 'space-between' }}
        >
            <List style={{ width: 240, paddingTop: 20, maxHeight: '100vh', overflowY: 'auto' }}>
                {menuItems.map((item, index) => (
                    <Box  
                        key={index} 
                        p={2} 
                        sx={{
                            cursor: 'pointer',
                            // borderLeft: '1px solid #88C2BB',
                            borderLeft: activeIndex === index ? '3px solid #88C2BB' : 'none',
                            '&:hover': {
                                backgroundColor: '#F0F8F7',
                            }
                        }}
                        onClick={() => setActiveIndex(index)}
                    >
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Box component="img" src={item.icon}
                            sx={{
                              filter: activeIndex === index 
                              ? 'invert(0%) sepia(0%) saturate(0%) brightness(0%) contrast(100%)'  // Force black
                              : 'invert(57%) sepia(0%) saturate(0%) brightness(85%) contrast(85%)',
                              transition: '0.3s'
                          }} />
                            <Typography variant="inherit" color={activeIndex === index ? '#000' : '#8D8D8D'}> 
                                {item.text}
                            </Typography>
                        </Stack>
                    </Box>
                ))}
            </List>
            
            <Box 
                p={2} 
                sx={{ 
                    cursor: 'pointer', 
                    '&:hover': { backgroundColor: '#F0F8F7' } 
                }}
            >
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Box component="img" src="./images/logout.svg" />
                    <Typography variant="inherit"> 
                    <Link to='/' 
                     style={{ 
                      textDecoration: 'none', 
                      color: '#88C2BB',
                      transition: '0.3s',
                  }}> Log out</Link>
                    </Typography>
                </Stack>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
