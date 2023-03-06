import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { TabContext, TabPanel, TabList, } from '@mui/lab';
import { Tab, Grid, Tooltip, Avatar, Menu, MenuItem } from '@mui/material'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Dashboard from './Dashboard';
import PresidentialBallot from './PresidentialBallot';
import GovernorshipBallot from './GovernorshipBallot';
import LgaBallot from './LgaBallot';

const drawerWidth = 240;
const settings = ['Profile', 'Logout'];

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [value, setValue] = useState('0');

    const handleChange = (newValue) => {
        console.log(newValue);
        setValue(newValue);
        setMobileOpen(false);
    };

    //const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <TabContext value={value} sx={{ backgroundColor: '#001233', }}>
            <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#001233', }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        backgroundColor: '#001233',
                        borderBottom: 1,
                        borderColor: 'white',

                    }}
                >
                    <Toolbar sx={{
                        display: { md: 'flex' },
                        justifyContent: { xs: 'space-between', md: 'flex-end' }
                    }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                            <Box component='span' sx={{ color: "#F5F5DC", fontSize: { xs: '20px', md: "25px" }, ml: 1 }} className='appName'>E-voting</Box>
                        </IconButton>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Typography variant='body2' sx={{ ml: 1, display: { xs: 'none', md: "flex" } }}>
                                Remy Sharp
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, backgroundColor: '#001233 !important', }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer

                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, backgroundColor: '#001233 !important',

                        }}
                    >
                        <Toolbar sx={{ backgroundColor: '#001233 !important', }}>
                            <svg fill="rgb(218,71,24)" width='40px' height='40px' version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_1_" d="M155.1,132.8c3.2,0,5.6-2.6,5.5-6l-0.9-85.6l-53.8,0.9l0.2,7.6l-17.5,18c-2.5,2.1-5.9,4.8-5.7,8.3 c0,0.7,0.4,21.4,0.4,21.4h13.3l-0.2-4.2c0-1.4,0.9-2.3,2.3-2.5c1.4,0,2.5,1.1,2.5,2.3l-0.1,48.2c0,3,2.5,5.6,5.6,5.5 c3,0,5.6-2.5,5.5-5.6l0.3-33.4c0-1.4,1.1-2.5,2.3-2.5c1.4,0,2.5,1.1,2.5,2.3V148c0,3,2.5,5.6,5.6,5.5c3,0,5.6-2.5,5.5-5.6v-40.6 c0,0,0.9-2.5,2.3-2.5s2.5,1.1,2.5,2.3v30.2c0,3,2.5,5.6,5.6,5.5c3,0,5.6-2.5,5.5-5.6v-30.2c0-1.4,1.1-2.5,2.3-2.5 c1.4,0,2.5,1.1,2.5,2.3l-0.2,19.8C149.3,130.2,151.8,132.8,155.1,132.8z M181.2,34.5l-0.7-25.8l-15.7,0.7L164.5,0h-63.4l0.9,34.5 v1.2L181.2,34.5z M170.3,17.1c0.4-0.2,0.7-0.2,0.9-0.2c2.3-0.2,4.2,1.4,4.4,3.7c0.4,2.1-1.2,4.1-3.5,4.4c-0.5,0-1.1,0-1.6-0.2 c-1.6-0.5-2.6-1.8-2.8-3.5C167.5,19.4,168.7,17.8,170.3,17.1z M245,176v80H15v-80h56v-74h25v8H79v109h-8v-21H53v27h157v-27h-17v21 h-8V110h-21v-8h29v74H245z"></path> </g></svg>
                            <Box component='span' sx={{ color: "#F5F5DC", fontSize: { xs: '20px', md: "25px" }, ml: 1 }} className='appName'>E-voting</Box>
                        </Toolbar>
                        <Divider />
                        <TabList aria-label="lab API tabs example" sx={{ display: 'grid', justifyContent: 'start', height: '100%', backgroundColor: '#001233 !important', }}>
                            <Box sx={{ width: '100%', display: 'grid', pt: 3 }}>
                                <Tab label={<span style={{ color: "rgb(142,142,142)", fontSize: '12px', fontWeight: 600, verticalAlign: 'middle', }}><DashboardIcon sx={{ color: "rgb(142,142,142)", mr: 0.5, fontSize: 14, verticalAlign: 'middle' }} />Dashboard</span>} sx={{ display: 'flex', alignItems: 'start' }} value='0' onChange={() => handleChange('0')}>

                                </Tab>


                                <Tab label={<span style={{ color: "rgb(142,142,142)", fontSize: '12px', fontWeight: 600, verticalAlign: 'middle' }} ><BookmarkBorderOutlinedIcon sx={{ color: "rgb(142,142,142)", mr: 0.5, fontSize: 14, verticalAlign: 'middle' }} />Presidential Election</span>} sx={{ display: 'flex', alignItems: 'start' }} value='1' onChange={() => handleChange('1')}>

                                </Tab>

                                <Tab label={<span style={{ color: "rgb(142,142,142)", fontSize: '12px', fontWeight: 600, verticalAlign: 'middle' }}><PersonPinOutlinedIcon sx={{ color: "rgb(142,142,142)", mr: 0.5, fontSize: 14, verticalAlign: 'middle' }} />Governorship Election</span>} sx={{ display: 'flex', alignItems: 'start' }} value='2' onChange={() => handleChange('2')}>

                                </Tab>
                                <Tab label={<span style={{ color: "rgb(142,142,142)", fontSize: '12px', fontWeight: 600, verticalAlign: 'middle' }}><PersonPinOutlinedIcon sx={{ color: "rgb(142,142,142)", mr: 0.5, fontSize: 14, verticalAlign: 'middle' }} />Local Govt Election</span>} sx={{ display: 'flex', alignItems: 'start' }} value='3' onChange={() => handleChange('3')}>

                                </Tab>
                            </Box>
                        </TabList>
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, backgroundColor: '#001233 !important',
                        }}
                        open
                    >
                        <Toolbar sx={{ backgroundColor: '#001233 !important', }}>
                            <svg fill="rgb(218,71,24)" width='40px' height='40px' version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_1_" d="M155.1,132.8c3.2,0,5.6-2.6,5.5-6l-0.9-85.6l-53.8,0.9l0.2,7.6l-17.5,18c-2.5,2.1-5.9,4.8-5.7,8.3 c0,0.7,0.4,21.4,0.4,21.4h13.3l-0.2-4.2c0-1.4,0.9-2.3,2.3-2.5c1.4,0,2.5,1.1,2.5,2.3l-0.1,48.2c0,3,2.5,5.6,5.6,5.5 c3,0,5.6-2.5,5.5-5.6l0.3-33.4c0-1.4,1.1-2.5,2.3-2.5c1.4,0,2.5,1.1,2.5,2.3V148c0,3,2.5,5.6,5.6,5.5c3,0,5.6-2.5,5.5-5.6v-40.6 c0,0,0.9-2.5,2.3-2.5s2.5,1.1,2.5,2.3v30.2c0,3,2.5,5.6,5.6,5.5c3,0,5.6-2.5,5.5-5.6v-30.2c0-1.4,1.1-2.5,2.3-2.5 c1.4,0,2.5,1.1,2.5,2.3l-0.2,19.8C149.3,130.2,151.8,132.8,155.1,132.8z M181.2,34.5l-0.7-25.8l-15.7,0.7L164.5,0h-63.4l0.9,34.5 v1.2L181.2,34.5z M170.3,17.1c0.4-0.2,0.7-0.2,0.9-0.2c2.3-0.2,4.2,1.4,4.4,3.7c0.4,2.1-1.2,4.1-3.5,4.4c-0.5,0-1.1,0-1.6-0.2 c-1.6-0.5-2.6-1.8-2.8-3.5C167.5,19.4,168.7,17.8,170.3,17.1z M245,176v80H15v-80h56v-74h25v8H79v109h-8v-21H53v27h157v-27h-17v21 h-8V110h-21v-8h29v74H245z"></path> </g></svg>
                            <Box component='span' sx={{ color: "#F5F5DC", fontSize: { xs: '20px', md: "25px" }, ml: 1 }} className='appName'>E-voting</Box>
                        </Toolbar>
                        <Divider />
                        <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ backgroundColor: '#001233 !important', display: 'grid', height: '100%', justifyContent: 'start' }}>
                            <Box sx={{ width: '100%', display: 'grid', pt: 3 }}>
                                <Tab label={<span style={{ color: "rgb(142,142,142)", fontSize: '12px', fontWeight: 600, verticalAlign: 'middle', }}><DashboardIcon sx={{ color: "rgb(142,142,142)", mr: 0.5, fontSize: 14, verticalAlign: 'middle' }} />Dashboard</span>} sx={{ display: 'flex', alignItems: 'start' }} value='0' onChange={() => handleChange('0')}>

                                </Tab>


                                <Tab label={<span style={{ color: "rgb(142,142,142)", fontSize: '12px', fontWeight: 600, verticalAlign: 'middle' }} ><BookmarkBorderOutlinedIcon sx={{ color: "rgb(142,142,142)", mr: 0.5, fontSize: 14, verticalAlign: 'middle' }} />Presidential Election</span>} sx={{ display: 'flex', alignItems: 'start' }} value='1' onChange={() => handleChange('1')}>

                                </Tab>

                                <Tab label={<span style={{ color: "rgb(142,142,142)", fontSize: '12px', fontWeight: 600, verticalAlign: 'middle' }}><PersonPinOutlinedIcon sx={{ color: "rgb(142,142,142)", mr: 0.5, fontSize: 14, verticalAlign: 'middle' }} />Governorship Election</span>} sx={{ display: 'flex', alignItems: 'start' }} value='2' onChange={() => handleChange('2')}>

                                </Tab>
                                <Tab label={<span style={{ color: "rgb(142,142,142)", fontSize: '12px', fontWeight: 600, verticalAlign: 'middle' }}><PersonPinOutlinedIcon sx={{ color: "rgb(142,142,142)", mr: 0.5, fontSize: 14, verticalAlign: 'middle' }} />Local Govt Election</span>} sx={{ display: 'flex', alignItems: 'start' }} value='1' onChange={() => handleChange('3')}>

                                </Tab>
                            </Box>
                        </TabList>
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, overflowY: 'scroll' }}
                >
                    <Toolbar />
                    <TabPanel value='0' sx={{ p: 0 }}>
                        <Dashboard />
                    </TabPanel>
                    <TabPanel value='1' sx={{ p: 0 }}>
                        <Grid container sx={{ justifyContent: 'center' }}>
                            <Grid item xs={12} md={11} lg={7} sx={{ backgroundColor: 'white', px: 1, borderRadius: '10px', pb: 3 }}>
                                <PresidentialBallot />
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value='2' sx={{px:0}}>
                        <Grid container sx={{ justifyContent: 'center' }}>
                            <Grid item xs={12} md={11} lg={7} sx={{ backgroundColor: 'white', px: 1, borderRadius: '10px', pb: 3 }}>
                                <GovernorshipBallot />
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value='3' sx={{px:0}}>
                        <Grid container sx={{ justifyContent: 'center' }}>
                            <Grid item xs={12} md={11} lg={7} sx={{ backgroundColor: 'white', px: 1, borderRadius: '10px', pb: 3 }}>
                                <LgaBallot />
                            </Grid>
                        </Grid>
                    </TabPanel>
                </Box>
            </Box>
        </TabContext>
    );
}



export default ResponsiveDrawer;