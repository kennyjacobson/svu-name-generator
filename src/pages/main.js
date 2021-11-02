import React, { useState } from 'react'
import {  Card, CardActionArea, CardContent, CardMedia, Grid,  Modal, Typography } from '@mui/material'
// import { makeStyles } from '@mui/styles';
// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
// import WhatshotIcon from '@mui/icons-material/Whatshot'
// import AdbIcon from '@mui/icons-material/Adb'
import VikingName from '../components/viking/nameGen'
import GenshinName from '../components/genshin/nameGen'


function Main(props) {
    const [openModalViking, setOpenModalViking] = useState(false)
    const [oponModalGenshin, setOpenModalGenshin] = useState(false)

    const handleOpenModalViking = () => {
        setOpenModalViking(true)
    }
    const handleCloseModalViking = () => {
        setOpenModalViking(false)
    }


    const handleOpenModalGenshin = () => {
        setOpenModalGenshin(true)
    }
    const handleCloseModalGenshin = () => {
        setOpenModalGenshin(false)
    }

    
    return (
        <>

        <Modal open={openModalViking}  onClose={handleCloseModalViking} >
            <VikingName  closeFunction={handleCloseModalViking} /> 
        </Modal>
        <Modal open={oponModalGenshin}  onClose={handleCloseModalGenshin} >
            <GenshinName  closeFunction={handleCloseModalGenshin} /> 
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
            <Grid item xs={0} md={3}>

            </Grid>
        </Grid>
        </>
    )
}

export default Main