import React, { useState } from 'react'
import {  Card, CardActionArea, CardContent, CardMedia, Grid,  Modal, Typography } from '@mui/material'
// import { makeStyles } from '@mui/styles';
// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
// import WhatshotIcon from '@mui/icons-material/Whatshot'
// import AdbIcon from '@mui/icons-material/Adb'
import VikingName from '../components/viking/nameGen'
import KnightName from '../components/knight/nameGen'
import PllName from '../components/pll/nameGen'


function Main(props) {
    const [openModalViking, setOpenModalViking] = useState(false)
    const [openModalKnight, setOpenModalKnight] = useState(false)
    const [openModalPll, setOpenModalPll] = useState(false)

    const handleOpenModalViking = () => {
        setOpenModalViking(true)
    }
    const handleCloseModalViking = () => {
        setOpenModalViking(false)
    }

    const handleOpenModalKnight = () => {
        setOpenModalKnight(true)
    }
    const handleCloseModalKnight = () => {
        setOpenModalKnight(false)
    }

    const handleOpenModalPll = () => {
        setOpenModalPll(true)
    }
    const handleCloseModalPll = () => {
        setOpenModalPll(false)
    }

    
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
            <Grid item xs={0} md={3}></Grid>
        </Grid>
        </>
    )
}

export default Main