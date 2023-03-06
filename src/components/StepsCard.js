import { Box, Grid } from '@mui/material'
import React from 'react'


const StepsCard = () => {


    return (
        <>
            <Grid container sx={{ backgroundColor: '#001233' ,py:{sm:4}}}>
                <Grid item xs={12} sm={6} lg={3} sx={{py:3}}>
                    <Grid container>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: "center" }}>
                            <Box sx={{ backgroundColor: 'white', borderRadius: '50%', width: '90px', height: '90px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="rgb(218,71,24)">
                                    <path d="M17.0496 42.0279C19.6082 46.617 22.3132 51.4599 22.5937 51.9481C23.1352 52.8781 23.5913 53.6299 23.9694 54.2011C24.0488 54.3227 24.1516 54.4272 24.2718 54.5087C24.3938 54.5928 24.5362 54.6425 24.684 54.6527C24.8482 54.6631 25.013 54.6466 25.1718 54.6039C25.2364 54.5849 25.2986 54.5587 25.3572 54.5257C25.3997 54.51 25.4399 54.4886 25.4767 54.4623C26.5768 53.73 27.6573 53.1002 28.6866 52.551C29.7159 52.0018 30.7794 51.4574 31.8136 50.9692C31.9746 50.8966 32.1269 50.8057 32.2672 50.6983C32.4539 50.5582 32.6038 50.3747 32.7038 50.1637C32.7918 49.9759 32.8605 49.7796 32.9087 49.5779C32.9575 49.385 33.0087 49.1336 33.0624 48.8456L41.0432 7.73958C41.1322 7.33853 41.1422 6.92395 41.0724 6.51909C41.0121 6.25138 40.8566 6.01472 40.635 5.85309C40.4134 5.69146 40.1407 5.61586 39.8675 5.64034C39.2943 5.65986 38.4553 5.74286 37.6016 5.82829C36.6723 5.91861 35.7259 6.01625 35.1015 6.02601C34.3966 6.02601 33.2819 5.81853 32.2989 5.62813C31.6794 5.50608 31.0965 5.38403 30.6452 5.33766C30.5888 5.3269 30.5309 5.3269 30.4745 5.33766C30.3926 5.34187 30.3111 5.35165 30.2306 5.36695C30.0275 5.41178 29.8436 5.51931 29.7049 5.67435C29.5661 5.82939 29.4796 6.02412 29.4574 6.23105V6.23105L29.2964 7.51989C29.2574 7.8421 28.2354 17.8428 27.25 27.5115C26.7475 32.4252 26.2743 37.1582 25.9889 39.8799L20.479 28.2047C20.3967 27.98 20.2303 27.7961 20.0151 27.6918C19.7998 27.5875 19.5525 27.571 19.3253 27.6457C19.1796 27.6792 19.041 27.7378 18.9155 27.819C17.9267 28.5143 16.8871 29.1344 15.8056 29.6742L12.4616 31.3414C12.2365 31.4476 12.0554 31.6291 11.9494 31.8545C11.8435 32.0799 11.8193 32.3352 11.8811 32.5765C12.0022 32.9545 12.171 33.3154 12.3836 33.6505C12.686 34.2119 14.8129 38.0223 17.0496 42.0279Z" ></path>
                                </svg>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="div" sx={{ whiteSpace: 'normal', fontSize: { xs: '25px' }, flexGrow: 1, textAlign: 'center', fontWeight: 800, lineHeight: 1.2, fontFamily: "'Carter One', cursive;", color: "white", width: '100%', py: 1 }}>
                                Login
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{px:{xs:5,sm:0}}}>
                            <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '20px', flexGrow: 1, textAlign: 'center', fontFamily: '"europa", sans-serif !important', width: '100%', color: "white", lineHeight: { xs: 1.5, sm: 1.5 } }}>
                               Login into your profile with your credentials
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} sx={{py:3}}>
                    <Grid container>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: "center" }}>
                            <Box sx={{ backgroundColor: 'white', borderRadius: '50%', width: '90px', height: '90px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg fill="rgb(218,71,24)" height="40px" width="40px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="select"> <path d="M14.8,24l-3.3-4.3l-3.2,4.2L5.8,6.9l16,7.2L16.4,16l3.2,4.3L14.8,24z M11.6,16.4l3.6,4.8l1.6-1.3L13.1,15l3.3-1.1l-8.1-3.6 l1.3,8.7L11.6,16.4z"></path> <path d="M4,18H0v-4h2v2h2V18z M2,12H0V6h2V12z M18,10h-2V6h2V10z M18,4h-2V2h-2V0h4V4z M2,4H0V0h4v2H2V4z M12,2H6V0h6V2z"></path> </g> </g></svg>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="div" sx={{ whiteSpace: 'normal', fontSize: { xs: '25px' }, flexGrow: 1, textAlign: 'center', fontWeight: 800, lineHeight: 1.2, fontFamily: "'Carter One', cursive;",  color: "white", width: '100%', py: 1 }}>
                                Select
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{px:{xs:5,sm:3}}}>
                            <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '20px', flexGrow: 1, textAlign: 'center', fontFamily: '"europa", sans-serif !important', width: '100%', color: "white", lineHeight: { xs: 1.5, sm: 1.5 } }}>
                              Select from the categeries where you want to vote(Presidential ,Governonship , etc)
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} sx={{py:3}}>
                    <Grid container>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: "center" }}>
                            <Box sx={{ backgroundColor: 'white', borderRadius: '50%', width: '90px', height: '90px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg version="1.1" id="Uploaded to svgrepo.com" height="60px" width="60px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill="rgb(218,71,24)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <path class="puchipuchi_een" d="M7,6c0-2.757,2.243-5,5-5s5,2.243,5,5c0,1.627-0.793,3.061-2,3.974V6c0-1.654-1.346-3-3-3 S9,4.346,9,6v3.974C7.793,9.061,7,7.627,7,6z M24,13c-1.104,0-2,0.896-2,2v-1c0-1.104-0.896-2-2-2s-2,0.896-2,2v-1 c0-1.104-0.896-2-2-2s-2,0.896-2,2V6c0-1.104-0.896-2-2-2s-2,0.896-2,2v10.277C9.705,16.106,9.366,16,9,16c-1.104,0-2,0.896-2,2v3 c0,0.454,0.155,0.895,0.438,1.249L11,28h12l2.293-3.293C25.682,24.318,26,23.55,26,23v-8C26,13.896,25.104,13,24,13z M11,29v1 c0,0.552,0.447,1,1,1h10c0.553,0,1-0.448,1-1v-1H11z"></path> </g></svg>
                               
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="div" sx={{ whiteSpace: 'normal', fontSize: { xs: '25px' }, flexGrow: 1, textAlign: 'center', fontWeight: 800, lineHeight: 1.2, fontFamily: "'Carter One', cursive;", color: "white", width: '100%', py: 1 }}>
                               Choose
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{px:{xs:5,sm:3}}}>
                            <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '20px', flexGrow: 1, textAlign: 'center', fontFamily: '"europa", sans-serif !important', width: '100%', color: "white", lineHeight: { xs: 1.5, sm: 1.5 } }}>
                               Chose your preferred candidate among the options available
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} sx={{py:3}}>
                    <Grid container>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: "center" }}>
                            <Box sx={{ backgroundColor: 'white', borderRadius: '50%', width: '90px', height: '90px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <svg height="60px" width="60px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="rgb(218,71,24)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"></style> <g> <path class="st0" d="M195.928,376.064H148.67l-43.168,82.738H512l-43.168-82.738h-42.957l9.478,28.779h-28.799L364.51,185.406 c0,0-5.038,1.349-12.576,3.281l-0.52-2.614c-0.928-4.518-2.642-8.621-4.68-12.527c-2.051-3.9-4.441-7.581-6.914-11.01l-0.716-0.991 l-0.899-0.78c-5.677-5.017-15.949-13.237-33.402-24.598l0.042,0.028c-18.274-11.945-38.938-18.345-56.946-18.774 c-38.826-0.801-81.727-1.68-93.2-1.911l-10.856-6.984l6.415-9.465L83.967,53.197L0,178.176l65.525,45.852l8.796-12.971 l22.414,15.141l32.298,48.009c4.771,7.082,11.27,12.871,18.908,16.757l0.077,0.042c0.014,0,5.754,2.867,13.82,6.942 c8.052,4.075,18.416,9.359,27.556,14.158l0.014,0.007c7.364,3.85,15.725,7.194,24.563,10.146l0.112,0.035l5.621,1.743 l15.569,80.806h-29.769L195.928,376.064z M220.757,301.771c-8.031-2.684-15.408-5.67-21.345-8.782h0.014 c-18.422-9.66-41.285-21.05-41.742-21.282c-4.286-2.185-8.044-5.522-10.742-9.542l-34.638-51.501l-25.87-17.474l45.29-66.789 l16.441,10.568l3.049,0.056c0.028,0.007,12.745,0.267,31.14,0.64c18.401,0.379,42.465,0.871,65.103,1.342 c13.089,0.204,30.795,5.466,45.528,15.218l0.45,0.295l-0.407-0.267c15.696,10.23,24.9,17.509,29.93,21.865 c0.619,0.871,1.209,1.742,1.771,2.614l-29.776,2.494l-36.605,13.251l-1.398,1.124c-11.755,9.436-18.682,23.6-18.921,38.636v0.681 c-0.006,14.846,6.506,28.94,17.825,38.552l2.382,2.016l0.295,0.042c0.886,0.717,2.122,1.728,3.921,3.239 c4.026,3.379,10.651,9.028,21.443,18.401c1.982,1.721,3.106,3.274,3.738,4.56c0.639,1.293,0.836,2.326,0.844,3.337 c0.014,2.108-1.082,4.722-3.865,7.103c-2.74,2.333-6.913,4.054-11.719,4.047c-1.939,0-3.977-0.267-6.113-0.885l-0.498-0.14 l0.541,0.154c-8.347-2.445-17.143-4.798-25.743-7.285L220.757,301.771z"></path> </g> </g></svg>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="div" sx={{ whiteSpace: 'normal', fontSize: { xs: '25px' }, flexGrow: 1, textAlign: 'center', fontWeight: 800, lineHeight: 1.2, fontFamily: "'Carter One', cursive;",  color: "white", width: '100%', py: 1 }}>
                                Vote
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{px:{xs:5,sm:3}}}>
                            <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '20px', flexGrow: 1, textAlign: 'center', fontFamily: '"europa", sans-serif !important', width: '100%', color: "white", lineHeight: { xs: 1.5, sm: 1.5 } }}>
                              Cast your vote and wait for results
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default StepsCard