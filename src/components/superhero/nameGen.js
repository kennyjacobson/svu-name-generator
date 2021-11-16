import React, { useState } from 'react'
import {  FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, Select, TextField } from "@mui/material"
import heroLast from './data/heroLast.json'
import heroFirst from './data/heroFirst.json'
import monthsList from '../data/monthsList.json'
import NameGenModal from '../nameGenModal';


function NameGen({closeFunction}) {
  const [lastName, setLastName] = useState("")
  const [birthMonth, setBirthMonth] = useState("JAN")
  const [knightName, setKnightName] = useState("")
  const [gender, setGender] = useState("DTS") 

  function getFirstPart() {
    const firstLetter = lastName.substring(0,1).toUpperCase()
    console.log(firstLetter)
    const firstPart = heroFirst[firstLetter]
    return firstPart
  }

  function getLastPart() {
    const lastPart = heroLast[birthMonth.toUpperCase()]
    return lastPart
  }

  function getTitle(){
    if(gender === 'M'){
      return "Bacon "
    } else if (gender === "F"){
      return " Kindness "
    } else {
      return "Cows"
    }
  } 


  function getNewName() {
    const firstPart = getFirstPart()
    const lastPart = getLastPart()
    const title = getTitle()
    setKnightName(lastPart +  " with the power of " + firstPart + " with a weakness to " + title)
  }
   


  return (
    <>
    <NameGenModal 
      title={"Hero Name Generator"}  
      description={"Find out your hero name and power."} 
      buttonText={"Get Your Hero Name"} 
      resultDescription={""} 
      closeFunction={closeFunction} 
      getNewNameFunction={getNewName} 
      newName={knightName}>


      <FormControl component="fieldset">
                  <FormLabel component="legend">Destiny</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                    <FormControlLabel value="M" onChange={e => setGender(e.target.value)} control={<Radio />} label="Catchphrase" />
                    <FormControlLabel value="F" onChange={e => setGender(e.target.value)} control={<Radio />} label="No Catchphrase" />
                   
                  </RadioGroup>
      </FormControl>
      
      <TextField value={lastName} onChange={e => setLastName(e.target.value)} id="first-name" label="First Name" variant="outlined" />
      <FormControl>
            <InputLabel htmlFor="birthMonth">Birth Month</InputLabel>
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
    </NameGenModal>

    </>
  )
}

export default NameGen