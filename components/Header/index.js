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
import { useAppContext } from '../../context/appContext';
import { useThemeContext } from '../../context/themeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header() {
    const { state, dispatch } = useAppContext();
    const { state: themeState, dispatch: themeDispatch } = useThemeContext();

    const handleHambergClick = () => {
        dispatch({ type: "SET_HAMBURGER_OPEN", payload: !state.hamburgerOpen, });
    }
    const handleThemeToggle = () => {
        if (themeState.themeName == 'lightTheme') {
            themeDispatch({ type: 'SET_DARK_THEME' });
        } else {
            themeDispatch({ type: 'SET_LIGHT_THEME' });
        }
    }

    return (
        <>
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
                            onClick={handleHambergClick}
                        >
                            {state.hamburgerOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                        {/* <Link href="/">
                        <a>
                            <Image width={100} height={35} src={logo} alt="room finder logo" />
                        </a>
                    </Link> */}
                        <Box sx={{ width: 200, background: 'blue' }}></Box>
                        <Box sx={{ display: { sm: 'none', xs: 'inline' } }}>
                            <IconButton onClick={handleThemeToggle}>
                                {themeState.themeName == 'darkTheme' ?
                                    <Brightness4Icon /> : <DarkModeIcon />
                                }
                            </IconButton>
                        </Box>
                    </Stack>

                </Grid>
                <Grid item xs={true} sx={{ mb: { xs: 1, sm: 0 } }}>
                    <SearchField />
                </Grid>
                <Grid item display={{ sm: "inline-block", xs: "none" }}>
                    <Stack direction="row" alignItems="center">
                        <IconButton onClick={handleThemeToggle}>
                            {themeState.themeName == 'darkTheme' ?
                                <Brightness4Icon /> : <DarkModeIcon />
                            }
                        </IconButton>
                        <IconButton>
                            <PersonIcon />
                        </IconButton>
                    </Stack>
                </Grid>
            </Grid>
            <Menu />
        </>
    )
}

Header.propTypes = {
    onDrawerAction: PropTypes.func,
    drawerOpen: PropTypes.bool,
}
export default Header