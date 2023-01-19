import { Backdrop, CircularProgress, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import PropTypes from 'prop-types';

function CustomBackdrop({ open, text }) {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
      open={open}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ mt: 3 }}>
        <CircularProgress color="secondary" />
        <Typography variant='h6'>{text ?? 'Loading...'}</Typography>
      </Stack>
    </Backdrop>
  )
}

CustomBackdrop.propTypes = {
  open: PropTypes.bool,
  text: PropTypes.string,
}
export default memo(CustomBackdrop)