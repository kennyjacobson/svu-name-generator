import React, { useState } from 'react'
import {  Button, Divider, FormControl, FormControlLabel, FormLabel, Grid, IconButton, InputLabel, Radio, RadioGroup, Select, Typography } from "@mui/material"
// import { makeStyles } from '@mui/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from '@mui/system';

import genshinElement from './data/genshinElement.json'
import genshinWeapon from './data/genshinWeapon.json'
import genshinFemaleName from './data/genshinFemaleName.json'
import genshinMaleName from './data/genshinMaleName.json'
import movieList from './data/movieList.json'
import tasteList from './data/tasteList.json'


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
  const [weapon, setWeapon] = useState("ACT")
  const [elemental, setElemental] = useState("SWE")
  const [genshinName, setGenshinName] = useState("")
  const [gender, setGender] = useState("M")

  function getWeapon() {
    console.log("weapon is " + weapon)
    const firstPart = genshinWeapon[weapon]
    console.log("got " + firstPart)
    return firstPart
  }

  function getElement() {
    console.log("flavor is " + elemental)
    const lastPart = genshinElement[elemental.toUpperCase()]
    console.log("Got " + lastPart)
    return lastPart
  }

  function getNewName() {
    const lastPart = getWeapon()
    const firstPart = getElement()
    if(gender === "M"){
      setGenshinName(genshinMaleName[firstPart + " " + lastPart])
    }
    else if (gender === "F"){
      setGenshinName(genshinFemaleName[firstPart + " " + lastPart])
    }
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
              Genshin Impact Name
            </Typography>
            <Divider/>
            {(currentPage === 1) ? (
              <>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Create a new Genshin Impact character so that people can start pulling for them!
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
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                    <FormControlLabel value="F" onChange={e => setGender(e.target.value)} control={<Radio />} label="Female" />
                    <FormControlLabel value="M" onChange={e => setGender(e.target.value)} control={<Radio />} label="Male" />

                  </RadioGroup>
                </FormControl>

                <FormControl>
                      <InputLabel htmlFor="weapon">Favorite Movie Genre</InputLabel>
                      <Select
                      
                      native
                      value={weapon}
                      onChange={e => setWeapon(e.target.value)}
                      inputProps={{
                          name: 'weapon',
                          id: 'weapon',
                      }}
                      >
                        {movieList.map((option) => (
                            <option key={option.value} value={option.value}  >
                            {option.label}
                            </option>
                        ))}

                      </Select>
                  </FormControl>

                <FormControl>
                      <InputLabel htmlFor="elemental">Favorite Flavor</InputLabel>
                      <Select
                      
                      native
                      value={elemental}
                      onChange={e => setElemental(e.target.value)}
                      inputProps={{
                          name: 'elemental',
                          id: 'elemental',
                      }}
                      >
                        {tasteList.map((option) => (
                            <option key={option.value} value={option.value}  >
                            {option.label}
                            </option>
                        ))}

                      </Select>
                  </FormControl>
                
                
                <Button onClick={getNewName} variant="outlined">Get Your Genshin Character</Button>
              </Box>
              </>  
            ) : (
              <>
                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{marginTop:"1em"}}>
                  Your Genshin Impact Character is...
                </Typography>
                <Typography id="modal-modal-title" variant="h3" component="h2" sx={{marginTop:"1em"}}>
                  {genshinName + " the " + getElement() + " " + getWeapon() + " User"}
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