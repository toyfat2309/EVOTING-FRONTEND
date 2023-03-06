import React, { useState } from 'react'
import ShowDrawer from '../components/Drawer'
import HeroPage from '../components/HeroPage'
import LandingPageNav from '../components/LandingPageNav'

const LandingPage = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const menuIcon = () => {
        setOpenMenu(true)
    }
    return (
        <>
            <LandingPageNav menuIcon={menuIcon}/>
            <HeroPage />
            <ShowDrawer menuIcon={menuIcon} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        </>
    )
}

export default LandingPage