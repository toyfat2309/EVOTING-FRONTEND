import { Box, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import stepBg from '../../assets/stepImg.jpeg'
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const HeroPage = ({ formik }) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const disable = formik.values.nin === '' || formik.values.passWord === ''

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Grid container sx={{ height: '100vh', width: '100vw', backgroundColor: '#001233', alignItems: 'center' }}>
                <Grid item xs={12} md={3} sx={{ height: '100vh', display: { xs: 'none', md: 'flex' } }}>
                    <Box component='img' sx={{ backgroundImage: `url(${stepBg})`, width: { xs: '100%', height: '100%' }, px: 0 }} >
                    </Box>
                </Grid>
                <Grid item xs={12} md={9} sx={{ display: "flex", justifyContent: 'center' }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item xs={11} sm={8} lg={6} sx={{ p: { xs: 0, sm: 3, } }} className='form'>
                            <Grid container>
                                <Grid item xs={12} sx={{ pt: 2, pb: 4, px: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Link to='/'>
                                            <svg fill="rgb(218,71,24)" width='90px' height='90px' version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_1_" d="M155.1,132.8c3.2,0,5.6-2.6,5.5-6l-0.9-85.6l-53.8,0.9l0.2,7.6l-17.5,18c-2.5,2.1-5.9,4.8-5.7,8.3 c0,0.7,0.4,21.4,0.4,21.4h13.3l-0.2-4.2c0-1.4,0.9-2.3,2.3-2.5c1.4,0,2.5,1.1,2.5,2.3l-0.1,48.2c0,3,2.5,5.6,5.6,5.5 c3,0,5.6-2.5,5.5-5.6l0.3-33.4c0-1.4,1.1-2.5,2.3-2.5c1.4,0,2.5,1.1,2.5,2.3V148c0,3,2.5,5.6,5.6,5.5c3,0,5.6-2.5,5.5-5.6v-40.6 c0,0,0.9-2.5,2.3-2.5s2.5,1.1,2.5,2.3v30.2c0,3,2.5,5.6,5.6,5.5c3,0,5.6-2.5,5.5-5.6v-30.2c0-1.4,1.1-2.5,2.3-2.5 c1.4,0,2.5,1.1,2.5,2.3l-0.2,19.8C149.3,130.2,151.8,132.8,155.1,132.8z M181.2,34.5l-0.7-25.8l-15.7,0.7L164.5,0h-63.4l0.9,34.5 v1.2L181.2,34.5z M170.3,17.1c0.4-0.2,0.7-0.2,0.9-0.2c2.3-0.2,4.2,1.4,4.4,3.7c0.4,2.1-1.2,4.1-3.5,4.4c-0.5,0-1.1,0-1.6-0.2 c-1.6-0.5-2.6-1.8-2.8-3.5C167.5,19.4,168.7,17.8,170.3,17.1z M245,176v80H15v-80h56v-74h25v8H79v109h-8v-21H53v27h157v-27h-17v21 h-8V110h-21v-8h29v74H245z"></path> </g></svg>
                                        </Link>
                                    </Box>
                                    <Box component="div" sx={{ whiteSpace: 'normal', fontSize: { xs: "32px", sm: '35px', }, flexGrow: 1, textAlign: 'center', fontWeight: 800, lineHeight: 1.2, my: 2, fontFamily: "'eurostile', sans-serif;", color: "#F5F5DC", width: '100%', backgroundColor: '#001233' }}>
                                        Login To E-Voting
                                    </Box>
                                    <form onSubmit={formik.handleSubmit}>
                                        <Box sx={{ backgroundColor: 'white', pt: 3, pb: 3, px: { xs: 1, sm: 1.5 }, borderRadius: '5px' }}>
                                            <FormControl sx={{ my: 1, width: '100%', backgroundColor: 'white' }} variant="outlined">
                                                <Box
                                                    sx={{
                                                        width: '100%',
                                                    }}
                                                >

                                                    <TextField fullWidth label="id" id="outlined-adornment-userId" onChange={formik.handleChange('nin')} value={formik.values.nin} onBlur={formik.handleBlur('nin')} />
                                                </Box>
                                                {
                                                    formik.touched.nin && formik.errors.nin ? <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '12px', flexGrow: 1, textAlign: 'flex-start', fontFamily: '"europa", sans-serif !important', width: '100%', color: "red", mb: .5 }}>
                                                        {formik.errors.nin}
                                                    </Box> : ''
                                                }
                                            </FormControl>
                                            <FormControl sx={{ my: 1, width: '100%', backgroundColor: 'white' }} variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Password"
                                                    onChange={formik.handleChange('passWord')} value={formik.values.passWord} onBlur={formik.handleBlur('passWord')}
                                                />
                                                {
                                                    formik.touched.passWord && formik.errors.passWord ? <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '12px', flexGrow: 1, textAlign: 'flex-start', fontFamily: '"europa", sans-serif !important', width: '100%', color: "red", mb: .5 }}>
                                                        {formik.errors.passWord}
                                                    </Box> : ''
                                                }
                                            </FormControl>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
                                                <Box sx={{ display: 'flex', alignItems: "center" }}>
                                                    <Checkbox {...label} sx={{ px: 0 }} />
                                                    <Box component='span' sx={{ fontFamily: "'eurostile', sans-serif;", }}>
                                                        Remember Me
                                                    </Box>
                                                </Box>
                                                <Box component='span' sx={{ textDecoration: 'underline', color: 'red', fontFamily: "'eurostile', sans-serif;", }}>
                                                    Forgot Password
                                                </Box>
                                            </Box>
                                            <Button type='submit' variant='contained' sx={{ width: '100%', backgroundColor: '#001233', py: 2, my: 2, ':hover': { backgroundColor: '#001233' } }} disabled={disable ? true : false}>
                                                Login
                                            </Button>
                                            <Box component='span' sx={{ fontFamily: "'europa', sans-serif;", pb: 2 }}>
                                                New user? <Link to='/signup'>
                                                    Signup
                                                </Link>
                                            </Box>
                                        </Box>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default HeroPage