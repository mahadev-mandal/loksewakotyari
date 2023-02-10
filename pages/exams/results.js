import { Button, Divider, Paper, Stack, Typography } from '@mui/material'
import { green, orange, red } from '@mui/material/colors'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Results() {
  return (
    <Paper>
      <Typography variant='h4'>System generated Model set-33</Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant='h5'>Results</Typography>
        <Stack direction="row" spacing={3}>
          <Typography color={green[500]} variant=''>Correct: <span style={{ fontWeight: 'bold' }}>10</span></Typography>
          <Typography color={red[500]} variant=''>Wrong: <span style={{ fontWeight: 'bold' }}>5</span></Typography>
          <Typography color={orange[500]} variant=''>Not Answered: <span style={{ fontWeight: 'bold' }}>10</span></Typography>
        </Stack>
      </Stack>
      <Divider sx={{ my: 2 }} />
      {Array.from({ length: 30 }, (_, i) => i + 1).map(item => (
        <Button
          key={item}
          sx={{ mb: 1, ml: 1 }}
          variant='contained'
          color={item == 4 ? 'success' : item == 9 ? 'error' : 'warning'}
        >
          {item}
        </Button>
      ))}
      <Paper sx={{ mt: 2, p: 2 }}>
        <Typography variant='h6'>
          1. Which among the following types of mountains are formed by the lifting up of land between faults or by the sinking of land outside the faults?
        </Typography>
        <Stack spacing={1}>
          {[1, 2, 3, 4].map((item) => (
            <Typography key={item} color="textSecondary">A. sinking of land outside the</Typography>

          ))}
        </Stack>

        <Stack
          direction="row"
          justifyContent="end"
          spacing={2}
          sx={{ mt: 3 }}
        >
          <Button variant='outlined' startIcon={<ArrowBackIosIcon />}>
            Back
          </Button>
          <Button variant='outlined' endIcon={<ArrowForwardIosIcon />}>
            Next
          </Button>
        </Stack>
      </Paper>
    </Paper>
  )
}

export default Results