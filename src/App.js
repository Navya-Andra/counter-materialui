import React, {useState} from 'react';
import './App.css'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function App({initialData = 0}){
  const [data, setData]=useState(initialData);
  function decrementData(){
    setData(prevData => prevData - 1);
  }
  function incrementData(){
    setData(prevData => prevData + 1);
  }
  return(
    <div className = "box">
      <span>{data}</span>
      <Stack direction="row" spacing={5}>
      <Button variant="contained" color="error" onClick = {decrementData}>
        -
      </Button>
      <Button variant="contained" color="success" onClick = {incrementData}>
        +
      </Button>
    </Stack>
    </div>
  )
}
