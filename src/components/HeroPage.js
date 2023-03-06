import { Grid, Box, Button } from '@mui/material'
import React from 'react'
import evot from '../assets/bgrm.png'
import StepsCard from './StepsCard'
import WhyChooseUs from './WhyChooseUs'

const HeroPage = () => {
    return (
        <>
            <Grid container sx={{ px: 0, pt: { xs: '60px', sm: 0 }, backgroundColor: '#001233', height: { xs: 'auto', sm: '50vh', lg: '100vh' } }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid container sx={{ justifyContent: 'center', alignItems: "center" }}>
                        <Grid item xs={10} sx={{ py: { xs: '60px', sm: 0 } }}>
                            <Box component="div" sx={{ whiteSpace: 'normal', fontSize: { xs: "32px", sm: '35px', md: '48px' }, flexGrow: 1, textAlign: 'center', fontWeight: 800, lineHeight: 1.2, mb: '24px', fontFamily: "'Carter One', cursive;",  color: "#F5F5DC", width: '100%' }}>
                                GET POWER OVER YOUR VOTE
                            </Box>
                            <Box component="div" sx={{ whiteSpace: 'normal', fontSize: '20px', flexGrow: 1, textAlign: 'center', fontFamily: '"europa", sans-serif !important', width: '100%', color: "white", lineHeight: { xs: 1.5, sm: 1.5 } }}>
                                E-voting is a trusted provider of secure online voting, which saves users the stress of staying on a long queue and users can vote from any location on any device. We guarantee election integrity
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', py: 3 }}>
                                <Button variant='contained' sx={{ borderRadius: '33px', backgroundColor: "rgb(218,71,24)", px: 5, py: 2 }}>
                                    Start Here
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} sx={{ backgroundColor: '#001233', px: 2, display: { sm: 'flex' }, alignItems: "center", pb: { xs: 5, sm: 0 } }}>
                    <Box component='img' src={evot} sx={{ width: { xs: '100%' }, px: 0 }}>

                    </Box>
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: "center", backgroundColor: 'white' }} >
                <Grid item xs={12} sm={12}>
                    <Box component="div" sx={{ whiteSpace: 'normal', fontSize: { xs: "32px", sm: '35px', }, flexGrow: 1, textAlign: 'center', fontWeight: 800, lineHeight: 1.2, fontFamily: "'eurostile', sans-serif;", color: "#F5F5DC", width: '100%', py: { xs: 3, sm: 5 }, borderTopRightRadius: '80%', backgroundColor: '#001233' }}>
                        Steps To Vote
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ backgroundColor: '#001233', py: 2 }}>
                    <StepsCard />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Box component="div" sx={{ whiteSpace: 'normal', fontSize: { xs: "32px", sm: '35px', }, flexGrow: 1, textAlign: 'center', fontWeight: 800, lineHeight: 1.2, fontFamily: "'eurostile', sans-serif;",  color: "#001233", width: '100%', py: { xs: 3, sm: 5 }, borderBottomLeftRadius: '80%', backgroundColor: '#001233' }}>
                        Steps To Vote
                    </Box>
                </Grid>
            </Grid>
            <WhyChooseUs/>
        </>
    )
}

export default HeroPage