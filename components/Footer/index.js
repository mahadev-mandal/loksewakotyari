import { Box, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const social = [
    { icon: FacebookIcon, link: 'https://www.facebook.com/' },
    { icon: YouTubeIcon, link: 'https://www.youtube.com/' },
    { icon: LinkedInIcon, link: 'https://in.linkedin.com/' },
    { icon: InstagramIcon, link: 'https://www.instagram.com/' },
    { icon: TwitterIcon, link: 'https://twitter.com/' },
]

const arr = [
    { label: 'Address', content: 'Koteswhowr Kathmandu', icon: LocationOnIcon },
    { label: 'Phone', content: '9812345678', icon: PhoneIcon },
    { label: 'Email', content: 'loksewatyari@gmail.com', icon: EmailIcon },
    { label: 'Owner', content: 'Mahadev Mandal', icon: PersonIcon },
];
const quickLinks = [
    { label: 'Privacy Policy', link: '/privacy' },
    { label: 'Contact Us', link: '/contactus' },
    { label: 'Terms & conditions', link: '/temsconditions' },
    { label: 'About Us', link: '/aboutus' },
]

function Footer() {
    return (
        <Box sx={{
            background: '#E1304C',
            width: '100%',
            py: 3,
            mt: 2,
            px: { xs: 5, md: 10, },
            '*': {
                color: 'white'
            }
        }}>
            <Grid
                container
                justifyContent="space-between"
                rowGap={2}
            >
                <Grid item>
                    <Box sx={{ height: 70, width: 200, background: 'blue', mb: 2 }}>LOGO HERE</Box>
                    <Stack direction="row" spacing={2}>
                        {social.map((item) => (
                            <Box sx={{
                                transition:'0.3s',
                                '&:hover': {
                                    transform: 'translateY(-5px)'
                                }
                            }} key={item.link}>
                                <Link href={item.link} ><item.icon /></Link>
                            </Box>
                        ))}
                    </Stack>
                </Grid>
                <Grid item>
                    <Typography variant="h5">Contact info</Typography>
                    <Divider sx={{ background: 'white', }} />
                    {arr.map((item) => (
                        <Stack
                            direction="row"
                            alignItems="center" spacing={1}
                            sx={{ fontSize: 14, my: 0.7 }}
                            key={item.label}
                        >
                            <item.icon sx={{ fontSize: 18, }} />
                            <span style={{ fontWeight: 'bold' }}>{item.label}:</span>
                            <span>{item.content}</span>
                        </Stack>
                    ))}
                </Grid>
                <Grid item>
                    <Typography variant="h5">Quick Links</Typography>
                    <Divider sx={{ background: 'white', }} />
                    {quickLinks.map((item) => (
                        <Stack key={item.label} sx={{ my: 1 }}>
                            <Link href={item.link} >{item.label}</Link>
                        </Stack>
                    ))}
                </Grid>
            </Grid>
            <Divider sx={{ background: 'white', my: 2 }} />
            <Typography textAlign="center" variant="body2">Copyright © loksewaTyari 2022  |   All rights reserved.</Typography>
        </Box>
    )
}

export default Footer