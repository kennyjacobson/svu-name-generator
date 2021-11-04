import React, { useState } from 'react'
import {  Button, Divider, FormControl, FormControlLabel, FormLabel, Grid, IconButton, InputLabel, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material"
// import { makeStyles } from '@mui/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from '@mui/system';

import starwarsLast from './data/starwarsLast.json'
import starwarsFirst from './data/starwarsFirst.json'
import colorsList from './data/colorsList.json'


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

function NameGen({closeFunction}) {
  const [currentPage, setCurrentPage] = useState(1)
  const [lastName, setLastName] = useState("")
  const [favoriteColor, setFavoriteColor] = useState("BLE")
  const [starwarsName, setStarwarsName] = useState("")
  const [side, setSide] = useState("N")

  function getFirstPart() {
    const firstLetter = lastName.substring(0,1).toUpperCase()
    console.log(firstLetter)
    const firstPart = starwarsFirst[firstLetter]
    return firstPart
  }

  function getLastPart() {
    const lastPart = starwarsLast[favoriteColor.toUpperCase()]
    return lastPart
  }

  function getTitle(){
    if(side === 'Y'){
      return "Welcome to the Darkside: "
    } else {
      return "Welcome to the Lightside: "
    }
  }

  function getNewName() {
    const firstPart = getFirstPart()
    const lastPart = getLastPart()
    const title = getTitle()
    setStarwarsName(title + " " + firstPart + " " + lastPart)
    setCurrentPage(2)
  }
   


  return (
    <>
    <Grid container  spacing={0}>
        <Grid item xs={12}>
          <Box sx={style}>
          <Box textAlign="right" alignContent="end">
              <IconButton onClick={closeFunction}  >
                  <CancelIcon sx={{color:"blue"}} fontSize='large'/>
              </IconButton>
            </Box>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              StarWars Name
            </Typography>
            <Divider/>
            {(currentPage === 1) ? (
              <>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Find out your Star Wars name to either help or fight the Darkside.
              </Typography>
              <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
                >

                <FormControl component="fieldset">
                  <FormLabel component="legend">Will You Join The Darkside?</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                    <FormControlLabel value="Y" onChange={e => setSide(e.target.value)} control={<Radio />} label="Yes" />
                    <FormControlLabel value="N" onChange={e => setSide(e.target.value)} control={<Radio />} label="No" />
                    
                   
                  </RadioGroup>
                </FormControl>


                <TextField value={lastName} onChange={e => setLastName(e.target.value)} id="first-name" label="Middle Name" variant="outlined" />

                <FormControl>
                      <InputLabel htmlFor="favoriteColor">Favorite Color</InputLabel>
                      <Select
                      
                      native
                      value={favoriteColor}
                      onChange={e => setFavoriteColor(e.target.value)}
                      inputProps={{
                          name: 'favoriteColor',
                          id: 'favoriteColor',
                      }}
                      >
                        {colorsList.map((option) => (
                            <option key={option.value} value={option.value}  >
                            {option.label}
                            </option>
                        ))}

                      </Select>
                  </FormControl>
                
                
                <Button onClick={getNewName} variant="outlined">Get Your StarWars Name</Button>
              </Box>
              </>  
            ) : (
              <>
                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{marginTop:"1em"}}>
                  Your StarWars Name is...
                </Typography>
                <Typography id="modal-modal-title" variant="h3" component="h2" sx={{marginTop:"1em"}}>
                  {starwarsName}
                </Typography>
              </>
              
            )}
          </Box>
        </Grid>
    </Grid> 
    </>
  )
}

export default NameGen