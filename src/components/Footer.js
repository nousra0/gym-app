import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">

        <Typography variant='h5' pb="40px" mt="20px">
          made with "company name"
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
