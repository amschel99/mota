import React from 'react'
import { Typography } from '@mui/material'
const Terms= ()=>{
    const [pdf,setPdf]=React.useState('')
    React.useEffect(()=>{

const readFile= ()=>{
    const reader= new FileReader()
    reader.addEventListener('load',(readerEvent)=>{
setPdf(readerEvent.target.result)
    })
    reader.readAsText('./termsAndConditions.pdf')
}
readFile()
    },[])


    return <>
    <Typography
          variant="h4"
          color="red"
          sx={{ textAlign: "center", marginBottom: 2 }}
        >
          {pdf}
        </Typography>
    
    </>
}
export default Terms;