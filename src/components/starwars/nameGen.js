import React, { useState } from 'react'
import {  FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, Select, TextField } from "@mui/material"

import starwarsLast from './data/starwarsLast.json'
import starwarsFirst from './data/starwarsFirst.json'
import colorsList from './data/colorsList.json'
import NameGenModal from '../nameGenModal';

function NameGen({closeFunction}) {
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
    
  }
   


  return (
    <>
    <NameGenModal
      title={"Star Wars Name"}
      description={"Find out your Star Wars name to either help or fight the Darkside."}
      buttonText={"Get Your Star Wars Name"}
      resultDescription={"Your Star Wars Name is..."}
      closeFunction={closeFunction}
      getNewNameFunction={getNewName}
      newName={starwarsName}>
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
      </NameGenModal>
    
    </>
  )
}

export default NameGen