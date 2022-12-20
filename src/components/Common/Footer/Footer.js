import { Container, Divider, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FacebookRounded, PhoneRounded, Twitter } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box sx={{'z-index':6}} component="footer">
            <Container sx={{ my: 8 }}>
                <Box sx={{
                    display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'
                }}>
                    <Box component="img" src="/images/logo.png" sx={{ width: '200px' }} />
                    <Box sx={{
                        display: 'flex', alignItems: 'flex-end',
                        my: 2, '&>a': {
                            color: 'primary.main', fontSize: '20px', textDecoration: 'none', mx: 1,
                            display: 'flex', alignItems: 'flex-end'
                        }
                    }}>
                        <Box component='a' href="https://www.facebook.com/profile.php?id=100088767314776" target="_blank" rel="noopener noreferrer">
                            <FacebookRounded color="primary" />
                        </Box>
                        <Box component='a' href="https://twitter.com/mota_automobile" target="_blank" rel="noopener noreferrer">
                            <Twitter color="primary" />
                        </Box>
                        <Box component="a" href="tel:+254797168636">
                            <PhoneRounded sx={{ mx: 1 }} />
                           Call for support
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ my: 3 }} />

                <Grid container rowSpacing={4} columnSpacing={2}>
                    <Grid item xs={6} sm={4} md={3} xl={2} sx={{
                        display: 'flex', flexDirection: 'column',
                        '& > a': { color: '#000000bb' }
                    }}>
                        <Typography variant='h6'>SELL</Typography>
                        <Link href="/register">Register as a seller</Link>
                        <Link href="/profile">Login to your account</Link>
                 
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} xl={2} sx={{
                        display: 'flex', flexDirection: 'column',
                        '& > a': { color: '#000000bb' }
                    }}>
                        <Typography variant='h6'>Browse cars</Typography>
                        <Link href="/cars">View all cars</Link>
                        <Link href="/">Browse by category</Link>
                    </Grid>
                   
                    <Grid item xs={6} sm={4} md={3} xl={2} sx={{
                        display: 'flex', flexDirection: 'column',
                        '& > a': { color: '#000000bb' }
                    }}>
                        <Typography variant='h6'>About</Typography>
                        <Link href="/about">About Mota automobiles</Link>
                       
                        <Link href="/terms">Terms & conditions</Link>
                        <Link href="/privacy">Privacy policy</Link>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} xl={2} sx={{
                        display: 'flex', flexDirection: 'column',
                        '& > a': { color: '#000000bb' }
                    }}>
                        <Typography variant='h6'>More</Typography>
                        <Link href="#">Blog</Link>
                        <Link href="https://twitter.com/mota_automobile">Twitter</Link>
                        <Link href="https://instagram.com/motaautomobiles">Instagram</Link>
                       
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} xl={2} sx={{
                        display: 'flex', flexDirection: 'column'
                    }}>
                        <Typography variant='h6'>Copyright</Typography>
                        <Typography variant="p">
                            Copyright © 2022 <br />
                            All rights reserved <br />
                         Developed by<br />
                            <Link href="/about" color="primary" fontWeight="bold" target="_blank" rel="noopener noreferrer">Mota automobiles</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;