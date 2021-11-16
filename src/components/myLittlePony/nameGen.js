import React, { useState } from 'react'
import { FormControl, InputLabel, Select, FormControlLabel, Radio, RadioGroup, FormLabel } from "@mui/material"

import NameGenModal from '../nameGenModal'
import mlpLast from './data/mlpLast.json'
import mlpFirstMale from './data/mlpFirstMale.json'
import mlpFirstFemale from './data/mlpFirstFemale.json'
import animalsSelectList from './data/animalsSelectList.json'
import colorsSelectList from './data/colorsSelectList.json'

function NameGen({closeFunction}) {
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
  }
   

  return (
    <>
    <NameGenModal 
      title={"My Little Pony Name Generator"}  
      description={"Find out the MLP name in your heart!"} 
      buttonText={"Get Your My Little Pony Name"} 
      resultDescription={"Your Magical My Little Pony Name is..."} 
      closeFunction={closeFunction} 
      getNewNameFunction={getNewName} 
      newName={mlpName}>
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
    </NameGenModal>
    </>
  )
}
export default NameGen