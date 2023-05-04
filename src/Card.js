import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import VideoPlayer from './VideoPlayer';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);

const MyCard = ({big}) => {
  return (
      <Card sx={{ backgroundColor: 'transparent !important', padding: 0, border: big? '5px solid red': 0 }}>
          <CardContent sx={{ backgroundColor: 'transparent !important', padding: 0 }}>
              <VideoPlayer big />
          </CardContent>

      </Card>
  )
}

export default MyCard