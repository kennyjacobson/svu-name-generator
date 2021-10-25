import React, { useState } from 'react'
import { Button, Grid,  Modal } from '@mui/material'
// import { makeStyles } from '@mui/styles';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import VikingName from '../components/viking/nameGen';


function Main(props) {
    const [openModalViking, setOpenModalViking] = useState(false)

    const handleOpenModalViking = () => {
        setOpenModalViking(true)
    }

    const handleCloseModalViking = () => {
        setOpenModalViking(false)
    }

    
    return (
        <>
        <Modal open={openModalViking}  onClose={handleCloseModalViking} >

                 <VikingName  closeFunction={handleCloseModalViking} /> 

        </Modal>
        

        <Grid container alignItems="center" spacing={1}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6} textAlign="center">
                <Button variant="contained" endIcon={<DoubleArrowIcon />} onClick={handleOpenModalViking} >Start Here</Button>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
        </>
    )
}

export default Main