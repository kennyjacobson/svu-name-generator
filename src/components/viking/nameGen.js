import React, { useState } from 'react'
import {    FormControl,   InputLabel, Select, TextField } from "@mui/material"

import vikingLast from './data/vikingLast.json'
import vikingFirst from './data/vikingFirst.json'
import monthsList from '../data/monthsList.json'
import NameGenModal from '../nameGenModal';

function NameGen({closeFunction}) {
  const [firstName, setFirstName] = useState("")
  const [birthMonth, setBirthMonth] = useState("JAN")
  const [vikingName, setVikingName] = useState("")

  function getFirstPart() {
    const firstLetter = firstName.substring(0,1).toUpperCase()
    console.log(firstLetter)
    const firstPart = vikingFirst[firstLetter]
    return firstPart
  }

  function getLastPart() {
    const lastPart = vikingLast[birthMonth.toUpperCase()]
    return lastPart
  }

  function getNewName() {
    const firstPart = getFirstPart()
    const lastPart = getLastPart()
    setVikingName(firstPart + " " + lastPart)
  }
   

  return (
    <>
    <NameGenModal 
      title={"Viking Name Generator"}  
      description={"Find out your Viking name so you can properly pillage and conquer."} 
      buttonText={"Get Your Viking Name"} 
      resultDescription={"Your Viking Name is..."} 
      closeFunction={closeFunction} 
      getNewNameFunction={getNewName} 
      newName={vikingName}>
      <TextField value={firstName} onChange={e => setFirstName(e.target.value)} id="first=name" label="First Name" variant="outlined" /> 
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