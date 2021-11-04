import React, { useState } from 'react'
import {  Card, CardActionArea, CardContent, CardMedia, Grid,  Modal, Typography } from '@mui/material'
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

        
        <Grid container alignItems="center" spacing={1}>
            <Grid item xs={0} md={3}> </Grid>
            <Grid item xs={12} md={3} textAlign="center">
               
                <Card >
                    <CardActionArea onClick={handleOpenModalViking}>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/viking.jpg"
                        alt="viking"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Viking Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Find out your Viking name so you can properly pillage and conquer.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                
            </Grid>
            <Grid item xs={12} md={3} textAlign="center">
               
                <Card >
                    <CardActionArea onClick={handleOpenModalKnight}>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/knight.jpg"
                        alt="viking"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Knight Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Defend against evil doers and spread peace throughout the land.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                
            </Grid>
            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={3} textAlign="center">
               
                <Card >
                    <CardActionArea onClick={handleOpenModalPll}>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/lacrosse_player.jpeg"
                        alt="viking"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lacrosse Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Get your lacrosse name.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                
            </Grid>
            <Grid item xs={12} md={3} textAlign="center">
               
                <Card >
                    <CardActionArea onClick={handleOpenModalGenshin}>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/Genshin_impact_logo.svg.png"
                        alt="genshin"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Genshin Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Prepare to fight evil in the Gacha RPG.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                
            </Grid>
            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={3} textAlign="center">
               
                <Card >
                    <CardActionArea onClick={handleOpenModalStarwars}>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/SW.jpg"
                        alt="viking"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Star Wars Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Fight or join the Darkside the balance is depending on you.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                
            </Grid>

            <Grid item xs={12} md={3} textAlign="center">
               
                <Card >
                    <CardActionArea onClick={handleOpenModalMLP}>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/Mane_Six.png"
                        alt="viking"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            My Little Pony Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Find your MLP name to spread your magic across the world!
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                
            </Grid>

            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={3} textAlign="center">
               
                <Card >
                    <CardActionArea onClick={handleOpenModalGreekGod}>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/greek-gods.jpg"
                        alt="viking"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Greek God Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Thunderbolts and lightning. Very, very frightening...
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                
            </Grid>

            <Grid item xs={12} md={3} textAlign="center">
               
                <Card >
                    <CardActionArea onClick={handleOpenModalSuperhero}>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/heroImage.jpg"
                        alt="viking"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Superhero Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Find out your superhero name and power
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                
            </Grid>

            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={3} textAlign="center">
               
                <Card >
                    <CardActionArea onClick={handleOpenModalCringename}>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cringename.jpg"
                        alt="viking"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Cringe Username
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        For a game, for netflix, or even as a new email suggestion
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                
            </Grid>

            <Grid item xs={12} md={3} textAlign="center">
               
                <Card >
                    <CardActionArea onClick={handleOpenModalPllT}>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/lacrosse_team.jpeg"
                        alt="viking"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        PLL Team
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Find out your PLL Team!
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                
            </Grid>

            <Grid item xs={0} md={3}></Grid>
        </Grid>
        </>
    )
}

export default Main