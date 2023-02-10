import { Button, IconButton, Paper, Stack, Typography } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
import GroupIcon from '@mui/icons-material/Group';

function ExamCard() {
  return (
    <>
      <Paper sx={{ p: 2, position: 'relative'}}>
        <IconButton
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            p: 0,
            m: 0
          }}
        >
          <BookmarkBorderIcon fontSize="large" />
        </IconButton>
        <Stack rowGap={3}>
          <Typography variant='h6'>
            Set-17|Loksewa NEA Level 3 Model Set
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant='outlined' size='small'>Nea</Button>
            <Button variant='outlined' size='small'>Nea</Button>
            <Button variant='outlined' size='small'>Nea</Button>
          </Stack>
          <Typography>
            नेपाल‌ विद्युत प्राधिकरण प्राविधिक सेवा,इलेक्ट्रिक‌ल समुह,इलेक्ट्रिक‌ल उपसमुह तह-३ इलेक्ट्रसियन पदको खूल्ला प्रतियोगितात्मक लिखित परिक्षा
          </Typography>
          <Stack direction="row" justifyContent="end" spacing={3}>
            <Stack direction="row" spacing={0.2} alignItems="center">
              <StarIcon sx={{ color: yellow[700] }} />
              <StarIcon sx={{ color: yellow[700] }} />
              <StarIcon sx={{ color: yellow[700] }} />
              <StarIcon />
              <StarIcon />
              <Typography>50</Typography>
            </Stack>
            <Stack direction="row" spacing={0.2} alignItems="center">
              <GroupIcon />
              <Typography>300</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </>
  )
}

export default ExamCard