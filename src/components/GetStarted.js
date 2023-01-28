import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img

import image2 from "../.././public/images/landing2.jpg"
import image1 from "../.././public/images/landing1.jpg"

const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            marginTop:'10px',
            py: 0,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Why choose Mota'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Sellers choose MOTA because we offer a highly targeted and effective way to reach potential buyers. Our platform utilizes advanced technology and data analysis to ensure that your ads are seen by the people who are most likely to be interested in your vehicles. Additionally, our user-friendly interface makes it easy for you to create and manage your campaigns, giving you more time to focus on running your business.

Buyers choose MOTA because we provide a convenient and efficient way to find the perfect vehicle. Our platform features a wide variety of vehicles from multiple sellers, making it easy to compare and find the right one at the right price. Additionally, our advanced search and filtering options allow buyers to quickly find the specific make and model they are looking for, saving them time and effort. We also provide detailed information about the vehicles and a direct contact to the seller for further questions.

Overall, MOTA is the ultimate platform for both sellers and buyers in the automotive industry, providing the most effective and efficient way to connect with the right people and find the perfect vehicle.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid sx={{}} item xs={12} sm={4} md={6}>
                <img src={`${image2}`} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={`${image1}`} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Our sellers are verified!'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    At MOTA, we understand the importance of trust and transparency in the automotive industry. That's why we go above and beyond to ensure that all of our sellers are verified and legitimate, providing buyers with the peace of mind and confidence they need when making such a significant purchase. We believe in building a platform that is not only effective and efficient, but also one that prioritizes the safety and satisfaction of our customers.
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;