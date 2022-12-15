import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect,useState} from 'react'
import axios from 'axios'
import  Typography from '@mui/material/Typography';
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import useAuth from "../AdminParts/../../../others/useAuthContext"




export default function ManageCars() {
  const {currentUser}=useAuth()
    const [cars,setCars]=useState([])
    const[success,setSuccess]=React.useState("")
    useEffect(()=>{
const fetchCars= async ()=>{
const {data}=await axios.get(`https://milesmotors.onrender.com/cars/all?user=${currentUser.email}`)
setCars(data)
}
fetchCars()
    },[currentUser.email])
    const deleteCar= async (_id)=>{
        try{
          setSuccess("")

             alert(`are you sure you want to delete ${_id},this action is irreversible!`)
   await axios.delete(`https://milesmotors.onrender.com/car/${_id}`)
   setSuccess(`success! car with id of ${_id} deleted`)
  
        }
        catch(error){
          alert(`there was an error`)
            console.error(error)
            return null
        }
    }
    
  return (
    
    <TableContainer sx={{position:'absolute', top:'100px'}}  component={Paper}>
      {success && <Alert severity='success'>{success}</Alert>}
      <Table sx={{width:'60',maxWidth:'60vw' }} aria-label="simple table">
        <TableHead sx={{width:"100vw"}}>
          <TableRow  >
            <TableCell sx={{width:"15vw"}}>Car Name</TableCell>
            <TableCell sx={{width:"15vw"}} >Unique ID</TableCell>
            <TableCell sx={{width:"10vw"}} >Action</TableCell>
           
     
          </TableRow>
        </TableHead>
        <TableBody >
          {cars.map(({ _id, carImg, carName, carType, transmission, fuel, color, mileage, price, engine }) => (
            <TableRow
              key={_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  sx={{width:"15vw"}} component="th" scope="row">
                {carName}
              </TableCell>
              <TableCell  sx={{width:"25vw"}} >
                {_id}
              
              </TableCell>
           
              <TableCell  sx={{width:"10vw"}}  >
                <Typography component={Button}
              
                onClick={
                  ()=>deleteCar(_id)
                }
                >Delete</Typography>
              </TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
