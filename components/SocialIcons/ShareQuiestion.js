import { IconButton, Stack } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShareIcon from '@mui/icons-material/Share';

const social = [
    { icon: FacebookIcon, link: 'https://www.facebook.com/' },
    { icon: YouTubeIcon, link: 'https://www.youtube.com/' },
    { icon: LinkedInIcon, link: 'https://in.linkedin.com/' },
    { icon: InstagramIcon, link: 'https://www.instagram.com/' },
    { icon: TwitterIcon, link: 'https://twitter.com/' },
    { icon: ShareIcon, link: '/share' },

]

function ShareQuiestion() {
    return (
        <>
            <Stack direction="row" spacing={1}>
                {social.map((item) => (
                    <IconButton sx={{
                        transition: '0.3s',
                        '&:hover': {
                            transform: 'translateY(-5px)'
                        }
                    }} key={item.link} size="small">
                        <item.icon />
                    </IconButton>
                ))}
            </Stack>
        </>
    )
}

export default ShareQuiestion