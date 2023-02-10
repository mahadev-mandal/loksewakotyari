import { Box } from '@mui/material'
import React from 'react'
import TemporaryDrawer from './Drawer/TemporaryDrawer'
import Footer from './Footer';
import Header from './Header';
import PropTypes from 'prop-types';

function Layout({ children }) {
  
  return (
    <Box >
      <Box sx={{ position: 'sticky', top: 0, left: 0, zIndex: 1200 }}>
        <Header />
        <TemporaryDrawer />
      </Box>
      {children}
      <Footer />
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.array,
}
export default Layout