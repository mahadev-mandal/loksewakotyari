import { Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ExamCard from '../../../components/Cards/examCard'

function AllExams() {
  return (
    <>
      <Stack component={Paper} sx={{p:1.5,mb:1}}>
        <Typography variant='h5'>All exams</Typography>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4} >
          <ExamCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4} >
          <ExamCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4} >
          <ExamCard />
        </Grid>
      </Grid>
    </>
  )
}

export default AllExams