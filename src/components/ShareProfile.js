import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Typography,Box,Stack} from '@mui/material'
import useAuth from "../others/useAuthContext"
import axios from 'axios'
import Whatsapp from '@mui/icons-material/WhatsApp'

import Facebook from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
const ShareProfile = () => {
    const[userName,setUserName]=React.useState('')
    const[id,setId]=React.useState('')
    const[copied,setCopied]=React.useState(false)
      const {currentUser}=useAuth()
React.useEffect(()=>{
        const getUser= async ()=>{
  try{
const {data}= await axios.post(`https://milesmotors.onrender.com/auth/login`,{
  email:currentUser.email
})


setUserName(data.name)
setId(data._id)

  }

  catch(e){
return null
  }
 }
 getUser()

    },[currentUser.email])
    
  return (
   
    <Stack direction="column" gap="10"  sx={{width:'80vw',marginTop:{xs:'5px',sm:'0px'}}}>
     <Typography sx={{fontStyle:'italic'}} variant="h6" align="center" color="primary" fontWeight="bold" >Share your profile and  let others discover you</Typography>
                        {userName?
                        

                      <Typography sx={{cursor:'pointer',fontStyle:'italic',display:'flex', flexDirection:'row',justifyContent:'center'}} variant="h4" align="center" color="primary" >
                        <CopyToClipboard style={{marginLeft:'10px',marginRight:'10px'}} text={`https://carhub-xi.vercel.app/seller/${id}`} onCopy={()=>{
return setCopied(true)
                        }} ><Typography sx={{color:'blue',marginTop:{xs:'0',md:'12px'}}}>Copy </Typography>
                        </CopyToClipboard>
                        <a   style={{marginLeft:'10px',marginRight:'10px'}} href={`whatsapp://send?text=Hello,check out our cars at https://carhub-xi.vercel.app/seller/${id} `}><Whatsapp/></a>
                        
                          <a  style={{marginLeft:'10px',marginRight:'10px'}} href={`https://www.facebook.com/share.php?u=https://carhub-xi.vercel.app/seller/${id} `}><Facebook/></a>
                           <a  style={{marginLeft:'10px',marginRight:'10px'}} href={`https://www.twitter.com/share?url=https://carhub-xi.vercel.app/seller/${id} `}><Twitter/></a>
                        </Typography>
                        
                        :null}
                          <Typography variant="h6" align="center" color="black" fontWeight="bold">
                            {copied?<span style={{color:'red'}}>Copied!</span>:null}
                          </Typography>
                          </Stack>

  )
}

export default ShareProfile