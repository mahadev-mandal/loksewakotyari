import '../styles/globals.css'
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import DrawerHeader from '../components/Drawer/DrawerHeader';
import MiniDrawer from '../components/Drawer/MiniDrawer';
import { Box } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname.startsWith('/dashboard')) {
    return (
      <Box sx={{ display: 'flex', background: 'rgb(250,250,250)' }}>
        <MiniDrawer />
        <Box component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 1, sm: 2, lg: 3 },
            width: '100vw'
          }}
        >
          <DrawerHeader />
          <Component {...pageProps} />
        </Box>
      </Box>
    )
  }
  return <>
    <Header />
    <Box sx={{ px: { xs: 1.5, sm: 4, md:8} }}>
      <Component {...pageProps} />
    </Box>
    <Footer />
  </>
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
}
export default MyApp
