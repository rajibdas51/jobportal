import Link from 'next/link';
import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotFoundPage = () => {
  return (
    <Container maxWidth='sm'>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        height='90vh'
        textAlign='center'
      >
        <WarningAmberIcon
          sx={{
            fontSize: { xs: '6rem', md: '8rem' },
            color: 'orange',
            marginBottom: 2,
          }}
        />

        <Typography variant='h3' component='h1' gutterBottom fontWeight='bold'>
          Page Not Found!
        </Typography>

        <Typography variant='h5' color='textSecondary' paragraph>
          The page you are looking for is not found!
        </Typography>

        <Button
          component={Link}
          href='/'
          variant='contained'
          color='primary'
          startIcon={<ArrowBackIcon />}
          sx={{ marginTop: 2 }}
        >
          Go Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
