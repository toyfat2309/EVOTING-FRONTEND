import { Box, Grid } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import stepBg from '../assets/stepImg.jpeg'

const WhyChooseUs = () => {

    const [height, setHeight] = useState(null)
    const img = useRef()

    useEffect(() => {
        setHeight(img.current.offsetWidth)
    }, [height])
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', py: { xs: 0, sm: 4, md: 5 } }} className='linearGrad'>
                <Grid item xs={12} md={11} lg={9}>
                    <Grid container>
                        <Grid item xs={12} sm={6} >
                            <Box component='img' src={stepBg} sx={{ width: { xs: '100%' }, px: 0 }} ref={img}>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ height: {xs:'auto',md:height},pl:{md:3} }}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Box component="div" sx={{ whiteSpace: 'normal', fontSize: { xs: "32px", sm: '35px', }, flexGrow: 1, textAlign: 'center', fontWeight: 800, lineHeight: 1.2, fontFamily: "'eurostile', sans-serif;", width: '70%', color: "#F5F5DC", width: '100%', py: { xs: 3, sm: 2 } }}>
                                        Why Choose Us
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sx={{py:{xs:1,md:3}}}>
                                    <Grid container>
                                        <Grid item xs={3} sx={{ width: '100%', display:'flex',justifyContent: 'center' }}>
                                            <Box sx={{ backgroundColor: 'white', borderRadius: '50%', width: {xs:'70px',md:'90px'}, height:{xs:'70px',md:'90px'}, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <svg fill="#000000" height="60" width="60" version="1.1" id="XMLID_246_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="secure"> <g> <path d="M14,15c0-1.1-0.9-2-2-2s-2,0.9-2,2c0,0.7,0.4,1.4,1,1.7V19h2v-2.3C13.6,16.4,14,15.7,14,15z"></path> </g> <g> <path d="M12,24c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,24,12,24z M12,10c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S15.3,10,12,10z "></path> </g> <g> <path d="M18,11h-2V6c0-2.2-1.8-4-4-4S8,3.8,8,6v5H6V6c0-3.3,2.7-6,6-6s6,2.7,6,6V11z"></path> </g> </g> </g></svg>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={9}>

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sx={{py:{xs:1,md:3}}}>
                                    <Grid container>
                                        <Grid item xs={3} sx={{ width: '100%', display:'flex',justifyContent: 'center' }}>
                                            <Box sx={{ backgroundColor: 'white', borderRadius: '50%', width: {xs:'70px',md:'90px'}, height: {xs:'70px',md:'90px'}, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <svg fill="#000000" height="60" width="60" version="1.1" id="XMLID_246_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="secure"> <g> <path d="M14,15c0-1.1-0.9-2-2-2s-2,0.9-2,2c0,0.7,0.4,1.4,1,1.7V19h2v-2.3C13.6,16.4,14,15.7,14,15z"></path> </g> <g> <path d="M12,24c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,24,12,24z M12,10c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S15.3,10,12,10z "></path> </g> <g> <path d="M18,11h-2V6c0-2.2-1.8-4-4-4S8,3.8,8,6v5H6V6c0-3.3,2.7-6,6-6s6,2.7,6,6V11z"></path> </g> </g> </g></svg>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={9}>

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sx={{py:{xs:1,md:3}}}>
                                    <Grid container>
                                        <Grid item xs={3} sx={{ width: '100%', display:'flex',justifyContent: 'center' }}>
                                            <Box sx={{ backgroundColor: 'white', borderRadius: '50%', width: {xs:'70px',md:'90px'}, height: {xs:'70px',md:'90px'}, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <svg fill="#000000" height="60" width="60" version="1.1" id="XMLID_246_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="secure"> <g> <path d="M14,15c0-1.1-0.9-2-2-2s-2,0.9-2,2c0,0.7,0.4,1.4,1,1.7V19h2v-2.3C13.6,16.4,14,15.7,14,15z"></path> </g> <g> <path d="M12,24c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,24,12,24z M12,10c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S15.3,10,12,10z "></path> </g> <g> <path d="M18,11h-2V6c0-2.2-1.8-4-4-4S8,3.8,8,6v5H6V6c0-3.3,2.7-6,6-6s6,2.7,6,6V11z"></path> </g> </g> </g></svg>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={9}>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default WhyChooseUs