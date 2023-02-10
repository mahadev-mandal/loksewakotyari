import { Box, Button, Divider, FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import React from 'react'
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Countdown from 'react-countdown';
// import TimerOffIcon from '@mui/icons-material/TimerOff';
import TimerIcon from '@mui/icons-material/Timer';
import { green, lightBlue, orange, red } from '@mui/material/colors';
import ExamCompleted from '../../components/Dialogs/examCompleted';

const renderer = ({ hours, minutes, seconds, completed }) => {
  return <>
    <span>
      {hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:
      {minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:
      {seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
    </span>
    {completed && <ExamCompleted open={true} />}
  </>
};

function Exams() {
  return (
    <Box>
      <Stack direction="row" spacing={2} component={Paper} sx={{ py: 1, my: 1 }} justifyContent="end">
        <Button variant='outlined' color='error'>Cancel</Button>
        <Button variant="outlined">
          <FullscreenIcon />
        </Button>
        <Button variant='contained' color='secondary'>Submit</Button>
      </Stack>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Paper sx={{ p: 2 }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <TimerIcon />
              <Typography variant='h4'>
                <Countdown
                  date={Date.now() + 18000}
                  renderer={renderer}
                />
              </Typography>
            </Stack>
            <Divider sx={{ my: 1 }} />
            <Typography variant='h5' component='h1'>
              Which among the following types of mountains are formed by the lifting up of land between faults or by the sinking of land outside the faults?
            </Typography>

            <FormControl fullWidth>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={2}
                name="radio-buttons-group"
                sx={{ m: 1 }}
              >
                {[1, 2, 3, 4].map((item) => (
                  <FormControlLabel
                    key={item}
                    sx={{
                      border: '1px solid blue',
                      borderRadius: 2,
                      background: item == 2 ? lightBlue[500] : '',
                      mb: 1,
                      '&:hover': {
                        transition: '0.3s',
                        background: lightBlue[200]
                      }
                    }}
                    value={item}
                    control={<Radio />}
                    label={<Typography variant="h6" color="textSecondary">A. sinking of land outside the</Typography>} />

                ))}
              </RadioGroup>
            </FormControl>
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
        </Grid>
        <Grid item md={4} xs={12}>
          <Paper sx={{ height: '100%', p: 2 }}>
            <Stack direction="row" spacing={1} sx={{ m: 2 }}>
              <Typography color={green[500]}>Answered: <span style={{ fontWeight: 'bold' }}>5</span></Typography>
              <Typography color={orange[500]}>Marked: <span style={{ fontWeight: 'bold' }}>10</span></Typography>
              <Typography color={red[500]}>Skipped: <span style={{ fontWeight: 'bold' }}>3</span></Typography>
            </Stack>
            {Array.from({ length: 30 }, (_, i) => i + 1).map(item => (
              <Button key={item} sx={{ mb: 1, ml: 1 }} variant='outlined' color='secondary'>{item}</Button>
            ))}
          </Paper>
        </Grid>
      </Grid >
    </Box >
  )
}

export default Exams