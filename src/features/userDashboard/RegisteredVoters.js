import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const RegisteredVoters = () => {
    return (
        <>
            <Grid container sx={{mb:3}}>
                <Grid item xs={12}>
                <Box component="div" sx={{ whiteSpace: 'normal', fontSize: { xs: "32px", sm: '35px', }, flexGrow: 1, textAlign: 'center', fontWeight: 800, lineHeight: 1.2, fontFamily: "'eurostile', sans-serif;", color: "#F5F5DC", width: '100%', pt: { xs: 1, sm: 2 },pb:{xs:3,sm:3}, borderTopRightRadius: '80%', backgroundColor: '#001233' }}>
                        Total Registered Voters
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5.8} lg={3.9} sx={{ backgroundColor: 'rgb(252,73,113)',mb:{xs:2,sm:0},mr:{xs:0,sm:1} }}>
                    <Grid container sx={{ p: 2 }}>
                        <Grid item xs={8}>
                            <Typography variant="h3" color="initial">
                                2
                            </Typography>
                            <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '16px', flexGrow: 1, textAlign: 'flex-start', fontFamily: '"europa", sans-serif !important', color: "black", lineHeight: { xs: 1.5, sm: 1.5 } }}>
                                Total no of voters for presidential election
                            </Box>
                        </Grid>
                        <Grid item xs={4} sx={{display:'flex',justifyContent:"center"}}>
                        <svg fill="#000000" width='50'  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 154 256" enableBackground="new 0 0 154 256" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M77.012,2c12.112,0,21.931,9.819,21.931,21.931s-9.819,21.931-21.931,21.931S55.08,36.044,55.08,23.931S64.899,2,77.012,2z M41.037,84.229c0-1.672,1.082-2.802,2.823-2.785c1.527,0.015,2.748,1.289,2.748,2.816v12.206h60.748V84.229 c0-1.66,1.067-2.785,2.785-2.785c1.66,0,2.785,1.067,2.785,2.785v12.236h19.321V78.658c0-15.231-12.445-27.618-27.618-27.618h-5.571 L82.412,76.332l-2.46-19.886l2.46-5.476l-10.823,0.01l2.46,5.466l-2.46,19.886L55.913,51.039h-6.519 c-15.231,0-27.618,12.445-27.618,27.618v17.808h19.3L41.037,84.229z M10.094,56.507l6.803-6.803c0.503,0.111,1.02,0.173,1.548,0.173 c1.912,0,3.708-0.744,5.06-2.096l5.962-5.961c2.789-2.79,2.789-7.33,0-10.12c-1.351-1.352-3.148-2.096-5.06-2.096 c-1.911,0-3.708,0.744-5.06,2.096l-5.962,5.962c-1.734,1.734-2.389,4.144-1.967,6.39l-9.195,9.196v70.758h19.678L33.141,254h87.741 l11.217-129.995h19.678v-21.636H10.094V56.507z"></path> </g></svg>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={5.8} lg={3.9} sx={{ backgroundColor: 'rgb(249,139,50)',mb:{xs:2,sm:0},mr:{xs:0,sm:1} }}>
                    <Grid container sx={{ p: 2 }}>
                        <Grid item xs={8}>
                            <Typography variant="h3" color="initial">
                                2
                            </Typography>
                            <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '16px', flexGrow: 1, textAlign: 'flex-start', fontFamily: '"europa", sans-serif !important', color: "black", lineHeight: { xs: 1.5, sm: 1.5 } }}>
                                Total no of voters for oyo state governorship election
                            </Box>
                        </Grid>
                        <Grid item xs={4} sx={{display:'flex',justifyContent:"center"}}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M3.66992 2.5V14.47C3.66992 15.45 4.12992 16.38 4.91992 16.97L10.1299 20.87C11.2399 21.7 12.7699 21.7 13.8799 20.87L19.0899 16.97C19.8799 16.38 20.3399 15.45 20.3399 14.47V2.5H3.66992Z" fill="#292D32"></path> <path d="M22 3.25H2C1.59 3.25 1.25 2.91 1.25 2.5C1.25 2.09 1.59 1.75 2 1.75H22C22.41 1.75 22.75 2.09 22.75 2.5C22.75 2.91 22.41 3.25 22 3.25Z" fill="#292D32"></path> <path d="M16 8.75H8C7.59 8.75 7.25 8.41 7.25 8C7.25 7.59 7.59 7.25 8 7.25H16C16.41 7.25 16.75 7.59 16.75 8C16.75 8.41 16.41 8.75 16 8.75Z" fill="#292D32"></path> <path d="M16 13.75H8C7.59 13.75 7.25 13.41 7.25 13C7.25 12.59 7.59 12.25 8 12.25H16C16.41 12.25 16.75 12.59 16.75 13C16.75 13.41 16.41 13.75 16 13.75Z" fill="#292D32"></path> </g></svg>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={5.8} lg={3.9} sx={{ backgroundColor: 'rgb(254,195,69)',mb:{xs:2,sm:0},mt:{xs:0,sm:1,lg:0} }}>
                    <Grid container sx={{ p: 2 }}>
                        <Grid item xs={8}>
                            <Typography variant="h3" color="initial">
                                2
                            </Typography>
                            <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '16px', flexGrow: 1, textAlign: 'flex-start', fontFamily: '"europa", sans-serif !important', color: "black", lineHeight: { xs: 1.5, sm: 1.5 } }}>
                                Total no of voters for eke lga election
                            </Box>
                        </Grid>
                        <Grid item xs={4} sx={{display:'flex',justifyContent:"center"}}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default RegisteredVoters