import React, { useState } from 'react'
import { FormControl, InputLabel,   Select, TextField } from "@mui/material"
// import { makeStyles } from '@mui/styles';


import pllLast from './data/pllLast.json'
import pllFirst from './data/pllFirst.json'
import monthsList from '../data/monthsList.json'
import NameGenModal from '../nameGenModal';


function NameGen({closeFunction}) {
  const [setCurrentPage] = useState(1)
  const [lastName, setLastName] = useState("")
  const [birthMonth, setBirthMonth] = useState("JAN")
  const [pllName, setPllName] = useState("")

  function getFirstPart() {
    const firstLetter = lastName.substring(0,1).toUpperCase()
    console.log(firstLetter)
    const firstPart = pllFirst[firstLetter]
    return firstPart
  }

  function getLastPart() {
    const lastPart = pllLast[birthMonth.toUpperCase()]
    return lastPart
  }

  

  function getNewName() {
    const firstPart = getFirstPart()
    const lastPart = getLastPart()
    setPllName(firstPart + " " + lastPart)
    setCurrentPage(2)
  }
   


  return (
    <>
    <NameGenModal 
      title={"Pll Player Name Generator"}  
      description={"Find out your PLL player"} 
      buttonText={"Get Your PLL Player"} 
      resultDescription={"Your PLL Player is..."} 
      closeFunction={closeFunction} 
      getNewNameFunction={getNewName} 
      newName={pllName}>
      <TextField value={lastName} onChange={e => setLastName(e.target.value)} id="first=name" label="First Name" variant="outlined" /> 
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