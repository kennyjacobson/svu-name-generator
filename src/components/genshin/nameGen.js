import React, { useState } from 'react'
import {   FormControl, FormControlLabel, FormLabel,  InputLabel, Radio, RadioGroup, Select} from "@mui/material"
// import { makeStyles } from '@mui/styles';

import genshinElement from './data/genshinElement.json'
import genshinWeapon from './data/genshinWeapon.json'
import genshinFemaleName from './data/genshinFemaleName.json'
import genshinMaleName from './data/genshinMaleName.json'
import movieList from './data/movieList.json'
import tasteList from './data/tasteList.json'
import NameGenModal from '../nameGenModal'

function NameGen({closeFunction}) {
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
    let genderName = ""
    if(gender === "M"){
      genderName = genshinMaleName[firstPart + " " + lastPart]
    }
    else if (gender === "F"){
      genderName = genshinFemaleName[firstPart + " " + lastPart]
    }
    const fullName = genderName + " the " + getElement() + " " + getWeapon() + " User"
    setGenshinName(fullName)
  }
   


  return (
    <>
    <NameGenModal 
      title={"Genshin Impact Name"}  
      description={"Create a new Genshin Impact character so that people can start pulling for them!"} 
      buttonText={"Get Your Genshin Impact Name"} 
      resultDescription={"Your Genshin Impact Character is..."} 
      closeFunction={closeFunction} 
      getNewNameFunction={getNewName} 
      newName={genshinName}>

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
    </NameGenModal>

    </>
  )
}

export default NameGen