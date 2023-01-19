import React from 'react'
import CmsDrawer from './Drawer/cmsDrawer'
import PropTypes from 'prop-types';
import useGetMe from "../hooks/useGetMe";
import { useEffect } from 'react';
import { useRouter } from 'next/router'

function CmsLayout({ children }) {
  const router = useRouter();
  const { data, loading, refetch } = useGetMe();
  useEffect(() => {
    refetch()
  }, [router.pathname, refetch])

  if(loading){
    return 'loading...'
  }
  if (data?.getLoggedinUser?.role !== '2') {
    typeof window !== 'undefined' && router.replace('/aadaadmin')
    return null
  }

  return (
    <>
      <CmsDrawer>
        {loading ? 'loading...' : children}
      </CmsDrawer>
    </>
  )
}

CmsLayout.propTypes = {
  children: PropTypes.array,
}
export default (CmsLayout)