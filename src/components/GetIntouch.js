import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text={
                'BROWSE OUR INVENTORY'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                "Ready to find your dream vehicle? Browse through our extensive inventory and discover a wide variety of vehicles from multiple sellers. Our advanced search and filtering options make it easy to find the specific make and model you're looking for, and our detailed vehicle information provides all the information you need to make an informed decision. Don't wait, start browsing now and drive away in your perfect car today!"
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/home'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: 'red',
                "&:hover": {
                    backgroundColor: 'red',
                }
            }}
            >
                Browse our Inventory
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;