import React, { useState }  from 'react'
import {  Button, Divider,  Grid, IconButton,    Typography } from "@mui/material"
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function NameGenModal(props){
    const [currentPage, setCurrentPage] = useState(1)


    const title = props.title
    const description = props.description
    const buttonText = props.buttonText
    const resultDescription = props.resultDescription
    const closeFunction  = props.closeFunction
    const getNewNameFunction  = props.getNewNameFunction
    const newName  = props.newName

    function runNewName() {
        console.log("in runNewName")
        getNewNameFunction()
        setCurrentPage(2)
        console.log("done runNewName")
    }

    return (
        <Grid container  spacing={0}>
        <Grid item xs={12}>
          <Box sx={style}>
          <Box textAlign="right" alignContent="end">
              <IconButton onClick={closeFunction}  >
                  <CancelIcon sx={{color:"blue"}} fontSize='large'/>
              </IconButton>
            </Box>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              {title}
            </Typography>
            <Divider/>
            {(currentPage === 1) ? (
              <>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {description}
              </Typography>
              <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
                >
                {props.children}

                <Button onClick={runNewName} variant="outlined">{buttonText}</Button>
              </Box>
              </>  
            ) : (
              <>
                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{marginTop:"1em"}}>
                  {resultDescription}
                </Typography>
                <Typography id="modal-modal-title" variant="h3" component="h2" sx={{marginTop:"1em"}}>
                  {newName}
                </Typography>
              </>
              
            )}
          </Box>
        </Grid>
    </Grid> 
    )
}

export default NameGenModal