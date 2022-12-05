import {  Hidden, Stack, Typography } from '@mui/material'
import React from 'react'
import { headerPadding } from '../../helpers/constants';
import AllCategories from '../Tooltip/AllCategories';
// import Link from 'next/link';

const arr = ['Electrical', 'Math', 'Science', 'English', 'Objective', 'GeneralKnowdledge',]

function Menu() {
    return (
        <Hidden smDown>
            <Stack direction="row"
                sx={{
                    background: 'rgba(45,185,242)',
                    p: headerPadding,
                    mb: 2
                    // height: 38,

                }}
            >
                <AllCategories />
                <Stack direction="row" alignItems="center" sx={{ overflowX: 'auto' }} >
                    {arr.map((item) => (
                        // <Link key={item} href="/" style={{margin:0}}>
                        <Typography
                            key={item}
                            component="span"
                            sx={{
                                fontSize: 17,
                                color: 'white',
                                fontWeight: 'bold',
                                py: 0.7,
                                px: 2,
                                transition: '0.3s',
                                '&:hover': {
                                    background: 'white',
                                    color: 'black'
                                }
                            }}
                        >
                            {item}
                        </Typography>
                        // </Link>
                    ))}
                </Stack>
            </Stack>
        </Hidden>
    )
}

export default Menu