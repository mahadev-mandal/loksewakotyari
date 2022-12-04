import { Button, Hidden, Stack, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import { headerPadding } from '../../helpers/constants';

const arr = ['Electrical', 'Math', 'Science', 'English', 'Objective', 'General Knowdledge',]

function Menu() {
    return (
        <Hidden smDown>
            <Stack direction="row"
                sx={{
                    background: 'rgba(45,185,242)',
                    overflowX: 'auto',
                    p: headerPadding,
                }}
            >
                <Button sx={{ color: 'white', pl: 3, pr: 5, background: 'rgb(8, 179, 247)', }} startIcon={<MenuIcon />}>
                    All Categories
                </Button>
                {arr.map((item) => (
                    <Typography
                        key={item}
                        component="span"
                        sx={{
                            fontSize: 17,
                            color: 'white',
                            fontWeight: 'bold',
                            py: 1,
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
                ))}
            </Stack>
        </Hidden>
    )
}

export default Menu