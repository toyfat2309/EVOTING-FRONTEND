import { Box, Button, Grid } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import stepBg from '../../assets/stepImg.jpeg'
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import NaijaStates from 'naija-state-local-government';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Heropage = ({ formik, disableSignUpButton,message }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [allState, setAllSet] = useState([]);
    const [state, setState] = useState('');
    const [allLga, setAllLga] = useState([]);
    const [lga, setLga] = useState('');
    const [unk, setUnk] = useState(false);
    const userDetails = useRef()
    const addressDetails = useRef()

    useEffect(() => {
        setAllSet(NaijaStates.states());
        setUnk(true)
        if (state != '') {
            setAllLga(NaijaStates.lgas(state).lgas)
            formik.values.state = state
            formik.values.lga = lga
        }
    }, [unk, allLga, state, lga, disableSignUpButton, message])

    const next = () => {
        userDetails.current.style.display = 'none'
        addressDetails.current.style.display = 'grid'
    }

    const handleStateChange = async (e) => {
        setState(e.target.value)
        setUnk(true)
    }

    const disable = formik.values.firstName === '' || formik.values.lastName === '' || formik.values.email === '' || formik.values.nin === '' || formik.values.passWord === ''

    const back = () => {
        userDetails.current.style.display = 'grid'
        addressDetails.current.style.display = 'none'
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

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
                                        Signup
                                    </Box>
                                    <form onSubmit={formik.handleSubmit}>
                                        <Box component="div" sx={{ whiteSpace: 'normal', fontSize: { xs: "16px"}, flexGrow: 1, textAlign: 'center', fontWeight: 800, fontFamily: "'eurostile', sans-serif;", color: "red", width: '100%',backgroundColor:'white'}}>
                                            {message}
                                        </Box>
                                        <Box sx={{ backgroundColor: 'white', pt: 3, pb: 3, px: { xs: 1, sm: 1.5 }, borderRadius: '5px', display: 'grid' }} ref={userDetails}>
                                            <Grid container spacing={1} sx={{ my: .5 }}>
                                                <Grid item xs={6} sx={{}}>
                                                    <FormControl sx={{ backgroundColor: 'white' }} variant="outlined">
                                                        <Box
                                                            sx={{
                                                                width: { xs: '100%', md: '100%', }
                                                            }}
                                                        >

                                                            <TextField sx={{ width: { xs: '100%', md: '100%', lg: '110%' } }}
                                                                label="Firstname" id="firstName" onChange={formik.handleChange('firstName')} value={formik.values.firstName} onBlur={formik.handleBlur('firstName')} />
                                                        </Box>
                                                        {
                                                            formik.touched.firstName && formik.errors.firstName ? <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '12px', flexGrow: 1, textAlign: 'flex-start', fontFamily: '"europa", sans-serif !important', width: '100%', color: "red", mb: .5 }}>
                                                                {formik.errors.firstName}
                                                            </Box> : ''
                                                        }

                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={6} sx={{ width: '100%' }}>
                                                    <FormControl sx={{ backgroundColor: 'white' }} variant="outlined">
                                                        <Box
                                                            sx={{
                                                                width: { xs: '100%', md: '100%', }
                                                            }}
                                                        >

                                                            <TextField sx={{ width: { xs: '100%', md: '100%', lg: '110%' } }} label="Lastname" id="lastname" onChange={formik.handleChange('lastName')} value={formik.values.lastName} onBlur={formik.handleBlur('lastName')} />
                                                        </Box>
                                                        {
                                                            formik.touched.lastName && formik.errors.lastName ? <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '12px', flexGrow: 1, textAlign: 'flex-start', fontFamily: '"europa", sans-serif !important', width: '100%', color: "red", mb: .5 }}>
                                                                {formik.errors.lastName}
                                                            </Box> : ''
                                                        }
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                            <FormControl sx={{ width: '100%', backgroundColor: 'white' }} variant="outlined">
                                                <Box
                                                    sx={{
                                                        width: '100%', my: .5
                                                    }}
                                                >

                                                    <TextField fullWidth label="Email" id="email" onChange={formik.handleChange('email')} value={formik.values.email} onBlur={formik.handleBlur('email')} />
                                                </Box>
                                                {
                                                    formik.touched.email && formik.errors.email ? <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '12px', flexGrow: 1, textAlign: 'flex-start', fontFamily: '"europa", sans-serif !important', width: '100%', color: "red", mb: .5 }}>
                                                        {formik.errors.email}
                                                    </Box> : ''
                                                }
                                                <Box
                                                    sx={{
                                                        width: '100%', my: .5
                                                    }}
                                                >

                                                    <TextField fullWidth label="NIN Number" id="nin" onChange={formik.handleChange('nin')} value={formik.values.nin} onBlur={formik.handleBlur('nin')} />
                                                </Box>
                                                {
                                                    formik.touched.nin && formik.errors.nin ? <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '12px', flexGrow: 1, textAlign: 'flex-start', fontFamily: '"europa", sans-serif !important', width: '100%', color: "red", mb: .5 }}>
                                                        {formik.errors.nin}
                                                    </Box> : ''
                                                }
                                            </FormControl>
                                            <FormControl sx={{ my: .5, width: '100%', backgroundColor: 'white' }} variant="outlined">
                                                <InputLabel htmlFor="password">Password</InputLabel>
                                                <OutlinedInput
                                                    id="password"
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
                                                    onChange={formik.handleChange('passWord')} value={formik.values.passWord} onBlur={formik.handleBlur('passWord')} />
                                                {
                                                    formik.touched.passWord && formik.errors.passWord ? <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '12px', flexGrow: 1, textAlign: 'flex-start', fontFamily: '"europa", sans-serif !important', width: '100%', color: "red", mb: .5 }}>
                                                        {formik.errors.passWord}
                                                    </Box> : ''
                                                }
                                            </FormControl>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                                                <Box component='span' sx={{ fontFamily: "'europa', sans-serif;" }}>
                                                    Already a user? <Link to='/login'>
                                                        Login
                                                    </Link>
                                                </Box>
                                                <Button variant='contained' sx={{ width: '30%', backgroundColor: '#001233', my: .5, ':hover': { backgroundColor: '#001233' } }} onClick={() => next()} disabled={disable ? true : false}>
                                                    Next
                                                </Button>
                                            </Box>
                                        </Box>
                                        <Box sx={{ backgroundColor: 'white', pt: 3, pb: 3, px: { xs: 1, sm: 1.5 }, borderRadius: '5px', display: 'none' }} ref={addressDetails}>
                                            <FormControl sx={{ width: '100%', backgroundColor: 'white' }} variant="outlined">
                                                <Box
                                                    sx={{
                                                        width: '100%', my: .5
                                                    }}
                                                >

                                                    <TextField fullWidth label="Phone no" type='number' id="outlined-adornment-userId" onChange={formik.handleChange('phone')} value={formik.values.phone} onBlur={formik.handleBlur('phone')} />
                                                </Box>
                                                {
                                                    formik.touched.phone && formik.errors.phone ? <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '12px', flexGrow: 1, textAlign: 'flex-start', fontFamily: '"europa", sans-serif !important', width: '100%', color: "red", mb: .5 }}>
                                                        {formik.errors.phone}
                                                    </Box> : ''
                                                }

                                                <Box
                                                    sx={{
                                                        width: '100%', my: .5
                                                    }}
                                                >

                                                    <TextField fullWidth label="Street Address" id="outlined-adornment-userId" onChange={formik.handleChange('streetAddress')} value={formik.values.streetAddress} onBlur={formik.handleBlur('streetAddress')} />
                                                </Box>
                                                {
                                                    formik.touched.streetAddress && formik.errors.streetAddress ? <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '12px', flexGrow: 1, textAlign: 'flex-start', fontFamily: '"europa", sans-serif !important', width: '100%', color: "red", mb: .5 }}>
                                                        {formik.errors.streetAddress}
                                                    </Box> : ''
                                                }

                                            </FormControl>
                                            <Box >
                                                <FormControl sx={{ width: { xs: '100%', sm: '49%' }, mr: 1, my: .5 }}>
                                                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={state === '' ? '' : state}
                                                        label="State"
                                                        onChange={handleStateChange}
                                                    >
                                                        <MenuItem value='' ></MenuItem>
                                                        {
                                                            allState.map((state) => (
                                                                <MenuItem value={state} key={state}>{state}</MenuItem>
                                                            ))
                                                        }
                                                    </Select>
                                                    {
                                                        formik.touched.lga && formik.errors.lga ? <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '12px', flexGrow: 1, textAlign: 'flex-start', fontFamily: '"europa", sans-serif !important', width: '100%', color: "red", mb: .5 }}>
                                                            {formik.errors.lga}
                                                        </Box> : ''
                                                    }

                                                </FormControl>
                                                <FormControl sx={{ width: { xs: '100%', sm: '49%' }, my: .5 }} disabled={state == '' ? true : false}>
                                                    <InputLabel id="demo-simple-select-label">Lga</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={lga === '' ? '' : lga}
                                                        label="Lga"
                                                        onChange={(e) => setLga(e.target.value)}
                                                    >
                                                        <MenuItem value='' ></MenuItem>
                                                        {
                                                            allLga.map((state) => (
                                                                <MenuItem value={state} key={state}>{state}</MenuItem>
                                                            ))
                                                        }
                                                    </Select>
                                                    {
                                                        formik.touched.state && formik.errors.state ? <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '12px', flexGrow: 1, textAlign: 'flex-start', fontFamily: '"europa", sans-serif !important', width: '100%', color: "red", mb: .5 }}>
                                                            {formik.errors.state}
                                                        </Box> : ''
                                                    }

                                                </FormControl>
                                            </Box>

                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
                                                <Button variant='contained' sx={{ width: '30%', backgroundColor: '#001233', my: .5, ':hover': { backgroundColor: '#001233' } }} onClick={() => back()} >
                                                    Back
                                                </Button>
                                                {
                                                    !disableSignUpButton ? <Button type='submit' variant='contained' sx={{ width: '30%', backgroundColor: '#001233', my: .5, ':hover': { backgroundColor: '#001233' } }} >
                                                        Submit
                                                    </Button> : <Button variant='contained' sx={{ width: '30%', backgroundColor: '#001233', my: .5, ':hover': { backgroundColor: '#001233' } }} disabled={disableSignUpButton ? true : false}>
                                                        Loading
                                                    </Button>
                                                }

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

export default Heropage