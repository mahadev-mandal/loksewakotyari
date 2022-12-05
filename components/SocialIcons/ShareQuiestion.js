import { IconButton, Stack } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShareIcon from '@mui/icons-material/Share';


const social = [
    { icon: FacebookIcon, link: '/' },
    { icon: YouTubeIcon, link: '/' },
    { icon: LinkedInIcon, link: '/' },
    { icon: InstagramIcon, link: '/' },
    { icon: TwitterIcon, link: '/' },
    { icon: ShareIcon, link: '/' },
]

function ShareQuiestion() {
    return (
        <>
            <Stack direction="row" spacing={1}>
                {social.map((item) => (
                    <IconButton key={item} size="small">
                        <item.icon />
                    </IconButton>
                ))}
            </Stack>
        </>
    )
}

export default ShareQuiestion