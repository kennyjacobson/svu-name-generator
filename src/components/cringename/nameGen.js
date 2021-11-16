/*import React, { useState } from 'react'
import {  Button, Divider, FormControl, FormControlLabel, FormLabel, Grid, IconButton, InputLabel, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material"
// import { makeStyles } from '@mui/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from '@mui/system';
*/
import React, { useState } from 'react'
import {    FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,  InputLabel, Select, TextField } from "@mui/material"

import knightLast from './data/knightLast.json'
import knightBirth from './data/knightBirth.json'
import monthsList from './data/monthsList.json'
import NameGenModal from '../nameGenModal';

/*const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };*/

function NameGen({closeFunction}) {
  /*const [currentPage, setCurrentPage] = useState(1)*/
  const [nickName, setnickName] = useState("")
  const [birthYear, setBirthYear] = useState("")
  const [favFood, setFavFood] = useState("")
  const [favBand, setFavBand] = useState("JAN")
  const [knightName, setKnightName] = useState("")
  const [gender, setGender] = useState("DTS")

  function getFirstPart() {
    return nickName
  }
  function getMiddlePart() {
    const lastTwo = birthYear
    const middlePart = knightBirth[lastTwo]
    return middlePart
  }

  function getLastPart() {
    const lastPart = knightLast[favBand.toUpperCase()]
    return lastPart
  }
  
  function getPartThree(){
    return favFood
  }

 

  function getTitle(){
    if(gender === 'M'){
      return "kewl"
    } else if (gender === "F"){
      return "ilove"
    } else {
      return ""
    }
  }

  function getNewName() {
    const randNums = getThreeNumbers()
    console.log("randNums", randNums)
    let fullName = ""
    for(const num of randNums){
      if (num === 1){
        fullName = fullName + getTitle()
      }
      else if (num === 2) {
        fullName = fullName + getFirstPart()
      }
      else if (num === 3){
        fullName = fullName + getLastPart()
      }
      else if (num === 4) {
        fullName = fullName + getPartThree()
      }
      else if (num === 5) {
        fullName = fullName + getMiddlePart()
      }
    }
    setKnightName(fullName)
    /*setCurrentPage(2)*/
  }
  function getThreeNumbers(){
    var arr = [];
    while(arr.length < 3){
      var r = Math.floor(Math.random() * 5) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
    }
    arr.sort()
    return arr
  }
   
  return (
    <>
    <NameGenModal 
      title={"Cringe Username Generator"}  
      description={"what was your 12 yr old cringe username."} 
      buttonText={"Get Your username"} 
      resultDescription={"Your cringe username is..."} 
      closeFunction={closeFunction} 
      getNewNameFunction={getNewName} 
      newName={knightName}>
      <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                    <FormControlLabel value="F" onChange={e => setGender(e.target.value)} control={<Radio />} label="Female" />
                    <FormControlLabel value="M" onChange={e => setGender(e.target.value)} control={<Radio />} label="Male" />
                    <FormControlLabel value="DTS" onChange={e => setGender(e.target.value)} control={<Radio />} label="Other" />
                   
                  </RadioGroup>
                </FormControl>
      <TextField value={nickName} onChange={e => setnickName(e.target.value)} id="first=name" label="Nickname" variant="outlined" /> 
      <TextField value={birthYear} onChange={e => setBirthYear(e.target.value)} id="first=name" label="Birth Year" variant="outlined" /> 
      <TextField value={favFood} onChange={e => setFavFood(e.target.value)} id="first=name" label="Favorite Food" variant="outlined" /> 
      <FormControl>
            <InputLabel htmlFor="birthMonth">Favorite Band</InputLabel>
            <Select
            
            native
            value={favBand}
            onChange={e => setFavBand(e.target.value)}
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
    </NameGenModal>

    </>
  )
}
 /* 
 <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                   <FormControlLabel value="F" onChange={e => setGender(e.target.value)} control={<Radio />} label="Female" />
                   <FormControlLabel value="M" onChange={e => setGender(e.target.value)} control={<Radio />} label="Male" />
                   <FormControlLabel value="DTS" onChange={e => setGender(e.target.value)} control={<Radio />} label="Other" />
                   
                </RadioGroup>
               </FormControl>
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
               If you were a 12 yr old today
            </Typography>
            <Divider/>
            {(currentPage === 1) ? (
              <>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                What sort of cringe username would you have?
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
                    <FormControlLabel value="DTS" onChange={e => setGender(e.target.value)} control={<Radio />} label="Other" />
                   
                  </RadioGroup>
                </FormControl>


                <TextField value={nickName} onChange={e => setnickName(e.target.value)} id="first-name" label="Nickname" variant="outlined" />
                <TextField value={favFood} onChange={e => setFavFood(e.target.value)} id="fav-food" label="Favorite Food" variant="outlined" />
                <TextField value={birthYear} onChange={e => setBirthYear(e.target.value)} id="birth-year" label="What year were you born?" variant="outlined" />

                <FormControl>
                      <InputLabel htmlFor="favBand">Favorite Band</InputLabel>
                      <Select
                      
                      native
                      value={favBand}
                      onChange={e => setFavBand(e.target.value)}
                      inputProps={{
                          name: 'favBand',
                          id: 'favBand',
                      }}
                      >
                        {monthsList.map((option) => (
                            <option key={option.value} value={option.value}  >
                            {option.label}
                            </option>
                        ))}

                      </Select>
                  </FormControl>
                
                
                <Button onClick={getNewName} variant="outlined">Get Your Username</Button>
              </Box>
              </>  
            ) : (
              <>
                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{marginTop:"1em"}}>
                  Your Cringe Username is...
                </Typography>
                <Typography id="modal-modal-title" variant="h3" component="h2" sx={{marginTop:"1em"}}>
                  {knightName}
                </Typography>
              </>
              
            )}
          </Box>
        </Grid>
    </Grid> 
    </>
  )
}
*/
export default NameGen