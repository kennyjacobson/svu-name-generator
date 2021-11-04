import React, { useState } from 'react'
import {  Button, Divider, FormControl, Grid, IconButton, InputLabel, Select, TextField, Typography } from "@mui/material"
// import { makeStyles } from '@mui/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from '@mui/system';

import pllteamLast from './data/vikingLast.json'
import pllteamFirst from './data/vikingFirst.json'
import monthsList from '../data/monthsList.json'


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
  const [firstName, setFirstName] = useState("")
  const [birthMonth, setBirthMonth] = useState("JAN")
  const [pllteamName, setPllteamName] = useState("")

  function getFirstPart() {
    const firstLetter = firstName.substring(0,1).toUpperCase()
    console.log(firstLetter)
    const firstPart = pllteamFirst[firstLetter]
    return firstPart
  }

  function getLastPart() {
    const lastPart = pllteamLast[birthMonth.toUpperCase()]
    return lastPart
  }

  function getNewName() {
    const firstPart = getFirstPart()
    const lastPart = getLastPart()
    setPllteamName(firstPart + " " + lastPart)
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
              Pll Team Name Generator
            </Typography>
            <Divider/>
            {(currentPage === 1) ? (
              <>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Find out your Pll Team name so you can rip some top cheddar.
              </Typography>
              <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField value={firstName} onChange={e => setFirstName(e.target.value)} id="first=name" label="First Name" variant="outlined" />
                {/* <TextField value={birthMonth} onChange={e => setBirthMonth(e.target.value)} id="birth-month" label="Birth Month" variant="outlined" /> */}
                
                <FormControl>
                      <InputLabel htmlFor="birthMonth">Favorite Month</InputLabel>
                      <Select
                      
                      native
                      value={birthMonth}
                      onChange={e => setBirthMonth(e.target.value)}
                      inputProps={{
                          name: 'birthMonth',
                          id: 'birthMonth',
                      }}
                      >
                      {monthsList.map((option) => (
                          <option key={option.value} value={option.value}  >
                          {option.label}
                          </option>
                      ))}

                      </Select>
                  </FormControl>
                
                
                <Button onClick={getNewName} variant="outlined">Get Your Pllteam Name</Button>
              </Box>
              </>  
            ) : (
              <>
                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{marginTop:"1em"}}>
                  Your Pllteam Name is...
                </Typography>
                <Typography id="modal-modal-title" variant="h3" component="h2" sx={{marginTop:"1em"}}>
                  {pllteamName}
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