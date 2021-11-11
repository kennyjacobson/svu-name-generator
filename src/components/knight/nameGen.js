import React, { useState } from 'react'
import {   FormControl, FormControlLabel, FormLabel,  InputLabel, Radio, RadioGroup, Select, TextField } from "@mui/material"


import knightLast from './data/knightLast.json'
import knightFirst from './data/knightFirst.json'
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
    const firstPart = knightFirst[firstLetter]
    return firstPart
  }

  function getLastPart() {
    const lastPart = knightLast[birthMonth.toUpperCase()]
    return lastPart
  }

  function getTitle(){
    if(gender === 'M'){
      return "Sir"
    } else if (gender === "F"){
      return "Lady"
    } else {
      return "Knight"
    }
  }

  function getNewName() {
    const firstPart = getFirstPart()
    const lastPart = getLastPart()
    const title = getTitle()
    setKnightName(title + " " + firstPart + " " + lastPart)
  }
   


  return (
    <>
    <NameGenModal
      title={"Knight Name"}  
      description={"Find out your Knight name so you can properly defend and protect."} 
      buttonText={"Get Your Knight Name"} 
      resultDescription={"Your Knight Name is..."} 
      closeFunction={closeFunction} 
      getNewNameFunction={getNewName} 
      newName={knightName}
    >

      

<FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                    <FormControlLabel value="F" onChange={e => setGender(e.target.value)} control={<Radio />} label="Female" />
                    <FormControlLabel value="M" onChange={e => setGender(e.target.value)} control={<Radio />} label="Male" />
                    <FormControlLabel value="DTS" onChange={e => setGender(e.target.value)} control={<Radio />} label="Other" />
                   
                  </RadioGroup>
                </FormControl>


                <TextField value={lastName} onChange={e => setLastName(e.target.value)} id="first-name" label="Last Name" variant="outlined" />

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