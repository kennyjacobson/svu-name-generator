import React, { useState } from 'react'
import {  Grid,  Modal } from '@mui/material'
// import { makeStyles } from '@mui/styles';
// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
// import WhatshotIcon from '@mui/icons-material/Whatshot'
// import AdbIcon from '@mui/icons-material/Adb'
import VikingName from '../components/viking/nameGen'
import KnightName from '../components/knight/nameGen'
import PllName from '../components/pll/nameGen'
import PllTeam from '../components/pllteam/nameGen'
import GenshinName from '../components/genshin/nameGen'
import StarwarsName from '../components/starwars/nameGen'
import MyLittlePonyName from '../components/myLittlePony/nameGen'
import GreekGodName from '../components/GreekGods/nameGen'
import Superhero from '../components/superhero/nameGen'
import Cringename from '../components/cringename/nameGen'
import Rapper from '../components/rapper/nameGen'
import CardDetails from '../components/cardDetails'


function Main(props) {
    const [openModalViking, setOpenModalViking] = useState(false)
    const [openModalKnight, setOpenModalKnight] = useState(false)
    const [openModalPll, setOpenModalPll] = useState(false)
    const [openModalGenshin, setOpenModalGenshin] = useState(false)
    const [openModalStarwars, setOpenModalStarwars] = useState(false)
    const [openModalMLP, setOpenModalMLP] = useState(false)
    const [openModalGreekGod, setOpenModalGreekGod] = useState(false)
    const [openModalSuperhero, setOpenModalSuperhero] = useState(false)
    const [openModalCringename, setOpenModalCringename] = useState(false)
    const [openModalPllT, setOpenModalPllT] = useState(false)
    const [openModalRapper, setOpenModalRapper] = useState(false)
    

    const handleOpenModalViking = () => {setOpenModalViking(true)}
    const handleCloseModalViking = () => {setOpenModalViking(false)}
    const handleOpenModalKnight = () => {setOpenModalKnight(true)}
    const handleCloseModalKnight = () => { setOpenModalKnight(false)}
    const handleOpenModalPll = () => {setOpenModalPll(true)}
    const handleCloseModalPll = () => {setOpenModalPll(false)}
    const handleOpenModalGenshin = () => {setOpenModalGenshin(true)}
    const handleCloseModalGenshin = () => {setOpenModalGenshin(false)}
    const handleOpenModalStarwars = () => {setOpenModalStarwars(true)}
    const handleCloseModalStarwars = () => {setOpenModalStarwars(false)}
    const handleOpenModalMLP = () => {setOpenModalMLP(true)}
    const handleCloseModalMLP = () => {setOpenModalMLP(false)}
    const handleOpenModalGreekGod = () => {setOpenModalGreekGod(true)}
    const handleCloseModalGreekGod = () => {setOpenModalGreekGod(false)}
    const handleOpenModalSuperhero = () => {setOpenModalSuperhero(true)}
    const handleCloseModalSuperhero = () => {setOpenModalSuperhero(false)}
    const handleOpenModalCringename = () => {setOpenModalCringename(true)}
    const handleCloseModalCringename = () => {setOpenModalCringename(false)}
    const handleOpenModalPllT = () => {setOpenModalPllT(true)}
    const handleCloseModalPllT = () => {setOpenModalPllT(false)}
    const handleOpenModalRapper = () => {setOpenModalRapper(true)}
    const handleCloseModalRapper = () => {setOpenModalRapper(false)}

    
    return (
        <>
        <Modal open={openModalKnight}  onClose={handleCloseModalKnight} >
            <KnightName  closeFunction={handleCloseModalKnight} /> 
        </Modal>
        <Modal open={openModalViking}  onClose={handleCloseModalViking} >
            <VikingName  closeFunction={handleCloseModalViking} /> 
        </Modal>
        <Modal open={openModalPll}  onClose={handleCloseModalPll} >
            <PllName  closeFunction={handleCloseModalPll} /> 
        </Modal>
        <Modal open={openModalGenshin}  onClose={handleCloseModalGenshin} >
            <GenshinName  closeFunction={handleCloseModalGenshin} /> 
        </Modal>
        <Modal open={openModalStarwars}  onClose={handleCloseModalStarwars} >
            <StarwarsName  closeFunction={handleCloseModalStarwars} /> 
        </Modal>
        <Modal open={openModalMLP}  onClose={handleCloseModalMLP} >
            <MyLittlePonyName  closeFunction={handleCloseModalMLP} /> 
        </Modal>
        <Modal open={openModalGreekGod}  onClose={handleCloseModalGreekGod} >
            <GreekGodName  closeFunction={handleCloseModalGreekGod} /> 
        </Modal>
        <Modal open={openModalSuperhero}  onClose={handleCloseModalSuperhero} >
            <Superhero  closeFunction={handleCloseModalSuperhero} /> 
        </Modal>
        <Modal open={openModalCringename}  onClose={handleCloseModalCringename} >
            <Cringename  closeFunction={handleCloseModalCringename} /> 
        </Modal>
        <Modal open={openModalPllT}  onClose={handleCloseModalPllT} >
            <PllTeam  closeFunction={handleCloseModalPllT} /> 
        </Modal>
        <Modal open={openModalRapper}  onClose={handleCloseModalRapper} >
            <Rapper  closeFunction={handleCloseModalRapper} /> 
        </Modal>
        

        
        <Grid container alignItems="center" spacing={1}>

            <Grid item xs={0} md={3}> </Grid>
            <Grid item xs={12} md={3} textAlign="center">
                <CardDetails 
                    handleOpenModal={handleOpenModalViking} 
                    imageLocation={"/static/images/viking.jpg"}  
                    title={"Viking Name"} 
                    description={"Find out your Viking name so you can properly pillage and conquer."}>
                </CardDetails>
            </Grid>
            <Grid item xs={12} md={3} textAlign="center">
                <CardDetails 
                    handleOpenModal={handleOpenModalKnight} 
                    imageLocation={"/static/images/knight.jpg"}  
                    title={"Knight Name"} 
                    description={"Defend against evil doers and spread peace throughout the land."}>
                </CardDetails>
            </Grid>
            <Grid item xs={0} md={3}></Grid>

            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={3} textAlign="center">
                <CardDetails 
                    handleOpenModal={handleOpenModalPll} 
                    imageLocation={"/static/images/lacrosse_player.jpeg"}  
                    title={"Lacrosse Name"} 
                    description={"Get your lacrosse name."}>
                </CardDetails>
            </Grid>
            <Grid item xs={12} md={3} textAlign="center">
                <CardDetails 
                    handleOpenModal={handleOpenModalGenshin} 
                    imageLocation={"/static/images/Genshin_impact_logo.svg.png"}  
                    title={"Genshin Name"} 
                    description={"Prepare to fight evil in the Gacha RPG."}>
                </CardDetails>
            </Grid>
            <Grid item xs={0} md={3}></Grid>

            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={3} textAlign="center">
                <CardDetails 
                    handleOpenModal={handleOpenModalStarwars} 
                    imageLocation={"/static/images/SW.jpg"}  
                    title={"Star Wars Name"} 
                    description={"Fight or join the Darkside the balance is depending on you."}>
                </CardDetails>
            </Grid>
            <Grid item xs={12} md={3} textAlign="center">
                <CardDetails 
                    handleOpenModal={handleOpenModalMLP} 
                    imageLocation={"/static/images/Mane_Six.png"}  
                    title={"My Little Pony Name"} 
                    description={"Find your MLP name to spread your magic across the world!"}>
                </CardDetails>
            </Grid>
            <Grid item xs={0} md={3}></Grid>

            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={3} textAlign="center">
                <CardDetails 
                    handleOpenModal={handleOpenModalGreekGod} 
                    imageLocation={"/static/images/greek-gods.jpg"}  
                    title={"Greek God Name"} 
                    description={"Thunderbolts and lightning. Very, very frightening..."}>
                </CardDetails>
            </Grid>
            <Grid item xs={12} md={3} textAlign="center">
                <CardDetails 
                    handleOpenModal={handleOpenModalSuperhero} 
                    imageLocation={"/static/images/heroImage.jpg"}  
                    title={"Superhero Name"} 
                    description={"Find out your superhero name and power"}>
                </CardDetails>
            </Grid>
            <Grid item xs={0} md={3}></Grid>

            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={3} textAlign="center">
                <CardDetails 
                    handleOpenModal={handleOpenModalCringename} 
                    imageLocation={"/static/images/cringename.jpg"}  
                    title={"Cringe Username"} 
                    description={"For a game, for netflix, or even as a new email suggestion"}>
                </CardDetails>
            </Grid>
            <Grid item xs={12} md={3} textAlign="center">
                <CardDetails 
                    handleOpenModal={handleOpenModalPllT} 
                    imageLocation={"/static/images/lacrosse_team.jpeg"}  
                    title={"PLL Team"} 
                    description={"Find out your PLL Team!"}>
                </CardDetails>
            </Grid>
            <Grid item xs={0} md={3}></Grid>

            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={3} textAlign="center">
                <CardDetails 
                    handleOpenModal={handleOpenModalRapper} 
                    imageLocation={"/static/images/Hip-Hop.jpeg"}  
                    title={"Rapper Name"} 
                    description={"Prepare to be the greatest rapper of all time."}>
                </CardDetails>
            </Grid>
            <Grid item xs={12} md={3} textAlign="center">
                
            </Grid>
            <Grid item xs={0} md={3}></Grid>

        </Grid>
        </>
    )
}

export default Main