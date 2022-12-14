import { Box, Grid, IconButton, Stack } from '@mui/material'
import React from 'react'
import SearchField from './SearchField'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import PersonIcon from '@mui/icons-material/Person';
import { headerPadding } from '../../helpers/constants';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import Menu from './Menu';
import TemporaryDrawer from '../Drawer/TemporaryDrawer';
import { useState } from 'react';

function Header() {
    const [dOpen, setDOpen] = useState(false);
    return (
        <Box sx={{ position: 'sticky', top: 0, left: 0, zIndex: 1200 }}>
            <Grid container
                alignItems="center"
                columnGap={5}
                sx={{
                    background: '#E1304C',
                    p: headerPadding
                }}
            >
                <Grid item sm={2} xs={12} sx={{ height: { sm: 70, xs: 60 } }} >
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <IconButton aria-label="menu"
                            size="large"
                            sx={{ display: { sm: 'none', xs: 'inline', }, color: 'white' }}
                            onClick={() => setDOpen(!dOpen)}
                        >
                            {dOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                        {/* <Link href="/">
                        <a>
                            <Image width={100} height={35} src={logo} alt="room finder logo" />
                        </a>
                    </Link> */}
                        <Box sx={{ width: 200, background: 'blue' }}></Box>
                        <Box sx={{ display: { sm: 'none', xs: 'inline' } }}>
                            <Brightness4Icon />
                        </Box>
                    </Stack>

                </Grid>
                <Grid item xs={true} sx={{ mb: { xs: 1, sm: 0 } }}>
                    <SearchField />
                </Grid>
                <Grid item display={{ sm: "inline-block", xs: "none" }}>
                    <Stack direction="row" alignItems="center">
                        <IconButton>
                            <Brightness4Icon />
                        </IconButton>
                        <IconButton>
                            <PersonIcon />
                        </IconButton>
                    </Stack>
                </Grid>
            </Grid>
            <Menu />
            <TemporaryDrawer open={dOpen} onClose={() => setDOpen(false)} />
        </Box >
    )
}

Header.propTypes = {
    onDrawerAction: PropTypes.func,
    drawerOpen: PropTypes.bool,
}
export default Header