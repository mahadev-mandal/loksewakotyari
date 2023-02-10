import { Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import SyllabusCard from '../../../components/Cards/syllabusCard'

function Syllabus() {
  return (
    <>
      <Stack component={Paper} sx={{ p: 1.5, mb: 1 }}>
        <Typography variant='h5'>All Syllabus</Typography>
      </Stack>
      <Grid container spacing={2}>
        <Grid item>
          <SyllabusCard />
        </Grid>
        <Grid item>
          <SyllabusCard />
        </Grid>
        <Grid item>
          <SyllabusCard />
        </Grid>
        <Grid item>
          <SyllabusCard />
        </Grid>
        <Grid item>
          <SyllabusCard />
        </Grid>
        <Grid item>
          <SyllabusCard />
        </Grid>
        <Grid item>
          <SyllabusCard />
        </Grid>
        <Grid item>
          <SyllabusCard />
        </Grid>
        <Grid item>
          <SyllabusCard />
        </Grid>
        <Grid item>
          <SyllabusCard />
        </Grid>
        <Grid item>
          <SyllabusCard />
        </Grid>
          
      </Grid>
    </>
  )
}

export default Syllabus