import { Box, Paper, Stack } from '@mui/material'
import { blue, green } from '@mui/material/colors'
import React from 'react'

function SyllabusCard() {
  return (
    <>
      <Stack
        component={Paper}
        spacing={2}
        alignItems="center"
        sx={{
          minWidth: 220,
          p: 1.5,
          textAlign: 'center',

        }}
      >
        <Box
          sx={{
            width: 100,
            background: blue[200],
            textAlign: "center",
            p: 0.5,
          }}
        >
          Electrical Forman
        </Box>
        <Box
          sx={{
            width: 200,
            background: green[200],
            textAlign: "center",
            p: 1,
          }}
        >
          NBL | तह-३ कनिष्ठ सहायक | 30 Sets
        </Box>
      </Stack>
    </>
  )
}

export default SyllabusCard


