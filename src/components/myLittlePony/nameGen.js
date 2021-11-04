import React, { useState } from 'react'
import {  Button, Divider, FormControl, Grid, IconButton, InputLabel, Select, Typography, FormControlLabel, Radio, RadioGroup, FormLabel } from "@mui/material"
// import { makeStyles } from '@mui/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from '@mui/system';

import mlpLast from './data/mlpLast.json'
import mlpFirstMale from './data/mlpFirstMale.json'
import mlpFirstFemale from './data/mlpFirstFemale.json'
import animalsSelectList from './data/animalsSelectList.json'
import colorsSelectList from './data/colorsSelectList.json'

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
  const [favoriteColor, setFavoriteColor] = useState("Red")
  const [favoriteAnimal, setFavoriteAnimal] = useState("Bear")
  const [mlpName, setMyLittlePonyName] = useState("")
  const [gender, setGender] = useState("F")

  function getFirstPart() {
    if(gender==="M"){
      return mlpFirstMale[favoriteAnimal]
    } else {
      return mlpFirstFemale[favoriteAnimal]
    }
  }

  function getLastPart() {
    const lastPart = mlpLast[favoriteColor]
    return lastPart
  }

  function getNewName() {
    const firstPart = getFirstPart()
    const lastPart = getLastPart()
    setMyLittlePonyName(firstPart + " " + lastPart)
    setCurrentPage(2)
  }
   

  return (
    <>
    <Grid container  spacing={0}>
        <Grid item xs={12}>
          <Box sx={style}>
          <Box textAlign="right" alignContent="end">
              <IconButton onClick={closeFunction}  >
                  <CancelIcon sx={{color:"#981e32"}} fontSize='large'/>
              </IconButton>
            </Box>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              My "My Little Pony" Name
            </Typography>
            <Divider/>
            {(currentPage === 1) ? (
              <>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Find out the MLP name in your heart!
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
                  <FormLabel component="legend">Gender:</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                    <FormControlLabel value="F" onChange={e => setGender(e.target.value)} control={<Radio />} label="Girl" />
                    <FormControlLabel value="M" onChange={e => setGender(e.target.value)} control={<Radio />} label="Boy" />
                  </RadioGroup>
                </FormControl>
                
                <FormControl>
                      <InputLabel htmlFor="favoriteAnimal">Favorite Animal</InputLabel>
                      <Select
                      
                      native
                      value={favoriteAnimal}
                      onChange={e => setFavoriteAnimal(e.target.value)}
                      inputProps={{
                          name: 'favoriteAnimal',
                          id: 'favoriteAnimal',
                      }}
                      >
                        {animalsSelectList.map((option) => (
                            <option key={option.value} value={option.value}  >
                            {option.label}
                            </option>
                        ))}

                      </Select>
                  </FormControl>

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
                        {colorsSelectList.map((option) => (
                            <option key={option.value} value={option.value}  >
                            {option.label}
                            </option>
                        ))}

                      </Select>
                  </FormControl>
                
                
                <Button onClick={getNewName} variant="outlined">Get Your My Little Pony Name</Button>
              </Box>
              </>  
            ) : (
              <>
                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{marginTop:"1em"}}>
                  Your Magical My Little Pony name is...
                </Typography>
                <Typography id="modal-modal-title" variant="h3" component="h2" sx={{marginTop:"1em"}}>
                  {mlpName}
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