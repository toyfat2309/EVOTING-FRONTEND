import { React, useState } from 'react'
import { Box, Grid } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';

const ShowDrawer = ({ menuIcon, openMenu, setOpenMenu }) => {

    const toggleDrawer = () => {
        setOpenMenu(false)
    }

    return (
        <>

            <Drawer
                anchor='right'
                open={openMenu}

            >

                <Box
                    sx={{ width: '60vw', height: '100%', backgroundColor: 'rgb(-5,8,26)' }}
                >
                    <Grid container sx={{ justifyContent: 'center' }}>
                        <Grid item xs={10}>
                            <Box sx={{ height: '70px', display: 'flex', justifyContent: 'flex-end',mt:2,color:'white' }}>
                                <CloseIcon sx={{ fontSize: 40,color:'white' }} onClick={() => toggleDrawer(false)} />
                            </Box>
                            <Link to='/' style={{textDecoration:"none"}}>
                            <Box sx={{ color: "white", display: 'flex', alignItems: "center",my:1 }}>
                                <HomeIcon sx={{ mr: 1 }} />
                                <Box component='div' sx={{ fontSize: '18px', fontWeight: 700, py: 1 }}>
                                    Home
                                </Box>
                            </Box>
                            </Link>
                            <Link to='/login' style={{textDecoration:"none"}}>
                            <Box sx={{ color: "white", display: 'flex', alignItems: "center",my:1 }}>
                                <VpnKeyIcon sx={{ mr: 1 }} />
                                <Box component='div' sx={{ fontSize: '18px', fontWeight: 700, py: 1 }}>
                                    Login
                                </Box>
                            </Box>
                            </Link>
                            <Link to='/signup' style={{textDecoration:"none"}}>
                            <Box sx={{ color: "white", display: 'flex', alignItems: "center",my:1 }}>
                                <HowToRegIcon sx={{ mr: 1 }} />
                                <Box component='div' sx={{ fontSize: '18px', fontWeight: 700, py: 1 }}>
                                    Signup
                                </Box>
                            </Box>
                            </Link>
                            <Link to='' style={{textDecoration:"none"}}>
                            <Box sx={{ color: "white", display: 'flex', alignItems: "center",my:1 }}>
                                <PhoneForwardedIcon sx={{ mr: 1 }} />
                                <Box component='div' sx={{ fontSize: '18px', fontWeight: 700, py: 1 }}>
                                    Contact Us
                                </Box>
                            </Box>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Drawer>
        </>
    )
}

export default ShowDrawer