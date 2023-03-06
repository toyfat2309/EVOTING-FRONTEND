import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const Event = () => {
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', mt: 5, pt: 4 }}>
                <Grid item xs={12} sm={10} lg={8} sx={{ border: 1,px:1 }}>
                    <Box component="div" sx={{ whiteSpace: 'normal', fontSize: { xs: "32px", sm: '35px', }, flexGrow: 1, textAlign: 'center', fontWeight: 800, lineHeight: 1.2, fontFamily: "'eurostile', sans-serif;", color: "#F5F5DC", width: '100%', pt: { xs: 1, sm: 2 }, pb: { xs: 3, sm: 3 }, borderTopRightRadius: '80%', backgroundColor: '#001233' }}>
                        Events Calender
                    </Box>
                    <Grid container>
                        <Grid item xs={12} sx={{mb:2}}>
                            <Grid container>
                                <Grid item xs={4} sx={{ backgroundColor: 'rgb(218,71,24)', py: { xs: 1, sm: 2 } }}>
                                    <Grid container sx={{height:'100%',display:'grid',alignItems:"center"}}>
                                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Typography variant='h5' color="initial">
                                                06
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Typography variant="h5" color="initial" sx={{ fontWeight: 700 }}>
                                                JUN
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={8} sx={{ backgroundColor: 'white', py: { xs: 1, sm: 2 }, display: 'flex', justifyContent: 'space-between' }}>
                                    <Box sx={{ width: '80%' }}>
                                        <Typography variant="h6" color="initial" sx={{ fontWeight: 700, fontSize: { xs: '16px' }, pl: { xs: .5, sm: 1 } }}>
                                            Presidential Election
                                        </Typography>
                                        <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '16px', flexGrow: 1, textAlign: 'flex-start', fontFamily: '"europa", sans-serif !important', color: "black", lineHeight: { xs: 1.5, sm: 1.5 },pl: { xs: .5, sm: 1 } }}>
                                            Total no of voters for eke lga election
                                        </Box>
                                    </Box>
                                    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: "center", width: "20%" }}>
                                        <svg fill="#000000" version="1.1" width='30px' height='30px' id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.75 32.75" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M29.375,1.25h-1.123c0.029-0.093,0.059-0.186,0.059-0.289c0-0.53-0.432-0.961-0.963-0.961s-0.961,0.431-0.961,0.961 c0,0.103,0.028,0.196,0.059,0.289h-3.68c0.029-0.093,0.059-0.186,0.059-0.289C22.823,0.431,22.393,0,21.861,0 C21.331,0,20.9,0.431,20.9,0.961c0,0.103,0.029,0.196,0.059,0.289h-3.681c0.029-0.093,0.058-0.186,0.058-0.289 c0-0.53-0.43-0.961-0.961-0.961s-0.961,0.431-0.961,0.961c0,0.103,0.028,0.196,0.058,0.289h-3.681 c0.029-0.093,0.059-0.186,0.059-0.289C11.85,0.431,11.419,0,10.889,0c-0.531,0-0.962,0.431-0.962,0.961 c0,0.103,0.028,0.196,0.058,0.289h-3.68c0.03-0.093,0.059-0.186,0.059-0.289C6.364,0.43,5.934,0,5.403,0 C4.872,0,4.441,0.431,4.441,0.961c0,0.103,0.028,0.196,0.058,0.289H3.375c-1.518,0-2.75,1.233-2.75,2.75v26 c0,1.518,1.232,2.75,2.75,2.75H26.27l5.855-5.855V4C32.125,2.484,30.893,1.25,29.375,1.25z M30.625,26.273l-0.311,0.311h-2.006 V8.943c0-1.576-1.289-2.864-2.863-2.864H7.306c-1.576,0-2.864,1.289-2.864,2.864v18.14c0,1.576,1.289,2.864,2.864,2.864h18.139 c0.176,0,0.347-0.021,0.514-0.053v1.045l-0.311,0.311H3.375c-0.689,0-1.25-0.561-1.25-1.25V5h28.5V26.273z M9.954,9.734V8.257 h1.049v5.053H9.804l-1.08-1.95c-0.299-0.538-0.63-1.19-0.876-1.782L7.825,9.585c0.031,0.666,0.046,1.378,0.046,2.203v1.521h-1.05 V8.256h1.335l1.049,1.852c0.299,0.531,0.6,1.163,0.825,1.732h0.022C9.977,11.173,9.954,10.492,9.954,9.734z M6.828,15.149h19.094 v11.457c0,0.525-0.431,0.955-0.955,0.955H7.783c-0.526,0-0.955-0.43-0.955-0.955V15.149z M15.002,10.244v0.929h-1.86v1.198h2.077 v0.938h-3.223V8.256h3.119v0.937h-1.973v1.05L15.002,10.244L15.002,10.244z M15.67,8.257h1.223l0.382,2.083 c0.113,0.601,0.217,1.253,0.299,1.764h0.015c0.083-0.549,0.203-1.155,0.33-1.778l0.427-2.069h1.215l0.405,2.129 c0.112,0.594,0.194,1.133,0.269,1.694h0.016c0.076-0.561,0.188-1.153,0.292-1.753l0.412-2.069h1.162l-1.304,5.053h-1.235 l-0.427-2.174c-0.098-0.509-0.182-0.981-0.24-1.557h-0.016c-0.088,0.569-0.172,1.048-0.291,1.557l-0.479,2.174h-1.253L15.67,8.257 z M23.891,13.384c-0.576,0-1.146-0.15-1.433-0.307l0.233-0.945c0.308,0.16,0.779,0.314,1.266,0.314 c0.523,0,0.802-0.216,0.802-0.545c0-0.314-0.239-0.496-0.847-0.713c-0.839-0.292-1.387-0.756-1.387-1.49 c0-0.864,0.72-1.523,1.912-1.523c0.569,0,0.988,0.122,1.289,0.256l-0.254,0.92c-0.203-0.096-0.562-0.238-1.059-0.238 c-0.494,0-0.732,0.225-0.732,0.487c0,0.323,0.283,0.463,0.937,0.712c0.891,0.328,1.312,0.792,1.312,1.507 C25.928,12.664,25.277,13.384,23.891,13.384z"></path> <path d="M8.145,17.275h7.213c0.262,0,0.477-0.18,0.477-0.397c0-0.219-0.215-0.398-0.477-0.398H8.145 c-0.263,0-0.477,0.179-0.477,0.398C7.667,17.096,7.882,17.275,8.145,17.275z"></path> <path d="M8.145,19.066h7.213c0.262,0,0.477-0.18,0.477-0.397c0-0.219-0.215-0.397-0.477-0.397H8.145 c-0.263,0-0.477,0.179-0.477,0.397C7.667,18.887,7.882,19.066,8.145,19.066z"></path> <path d="M8.145,20.857h7.213c0.262,0,0.477-0.18,0.477-0.397c0-0.219-0.215-0.397-0.477-0.397H8.145 c-0.263,0-0.477,0.179-0.477,0.397C7.667,20.678,7.882,20.857,8.145,20.857z"></path> <path d="M8.145,22.648h7.213c0.262,0,0.477-0.18,0.477-0.397c0-0.219-0.215-0.397-0.477-0.397H8.145 c-0.263,0-0.477,0.179-0.477,0.397C7.667,22.469,7.882,22.648,8.145,22.648z"></path> <path d="M8.145,24.439h7.213c0.262,0,0.477-0.18,0.477-0.397c0-0.219-0.215-0.397-0.477-0.397H8.145 c-0.263,0-0.477,0.179-0.477,0.397C7.667,24.26,7.882,24.439,8.145,24.439z"></path> <path d="M8.145,26.23h7.213c0.262,0,0.477-0.18,0.477-0.397c0-0.219-0.215-0.397-0.477-0.397H8.145 c-0.263,0-0.477,0.179-0.477,0.397C7.667,26.051,7.882,26.23,8.145,26.23z"></path> <path d="M17.394,17.275h7.211c0.264,0,0.478-0.18,0.478-0.397c0-0.219-0.214-0.398-0.478-0.398h-7.211 c-0.263,0-0.478,0.179-0.478,0.398C16.916,17.096,17.131,17.275,17.394,17.275z"></path> <path d="M17.394,19.066h7.211c0.264,0,0.478-0.18,0.478-0.397c0-0.219-0.214-0.397-0.478-0.397h-7.211 c-0.263,0-0.478,0.179-0.478,0.397C16.916,18.887,17.131,19.066,17.394,19.066z"></path> <path d="M17.394,20.857h7.211c0.264,0,0.478-0.18,0.478-0.397c0-0.219-0.214-0.397-0.478-0.397h-7.211 c-0.263,0-0.478,0.179-0.478,0.397C16.916,20.678,17.131,20.857,17.394,20.857z"></path> <path d="M17.394,22.648h7.211c0.264,0,0.478-0.18,0.478-0.397c0-0.219-0.214-0.397-0.478-0.397h-7.211 c-0.263,0-0.478,0.179-0.478,0.397C16.916,22.469,17.131,22.648,17.394,22.648z"></path> <path d="M17.394,24.439h7.211c0.264,0,0.478-0.18,0.478-0.397c0-0.219-0.214-0.397-0.478-0.397h-7.211 c-0.263,0-0.478,0.179-0.478,0.397C16.916,24.26,17.131,24.439,17.394,24.439z"></path> <path d="M17.394,26.23h7.211c0.264,0,0.478-0.18,0.478-0.397c0-0.219-0.214-0.397-0.478-0.397h-7.211 c-0.263,0-0.478,0.179-0.478,0.397C16.916,26.051,17.131,26.23,17.394,26.23z"></path> </g> </g> </g></svg>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Event