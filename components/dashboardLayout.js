import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import useGetMe from '../hooks/useGetMe'
import TemporaryDrawer from './Drawer/TemporaryDrawer'
import Footer from './Footer'
import Header from './Header';
import PropTypes from 'prop-types';

function DashboardLayout({ children }) {
  const router = useRouter()
  const { data, loading, refetch } = useGetMe();

  useEffect(() => {
    refetch()
  }, [router.pathname, refetch])

  if (loading) {
    return 'loading...'
  }
  if (data?.getLoggedinUser?.role !== '1') {
    typeof window !== 'undefined' && router.replace('/aadaadmin')
    return null
  }
  return (
    <>
      <Box sx={{ position: 'sticky', top: 0, left: 0, zIndex: 1200 }}>
        <Header />
        <TemporaryDrawer />
      </Box>
      {loading ? 'loading...' : children}
      <Footer />
    </>
  )
}

DashboardLayout.propTypes = {
  children: PropTypes.array,
}
export default (DashboardLayout)