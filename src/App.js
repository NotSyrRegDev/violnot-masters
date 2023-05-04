import logo from './logo.svg';
import './App.css';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MyCard from './Card';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SwitchVideoIcon from '@mui/icons-material/SwitchVideo';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness2Icon from '@mui/icons-material/Brightness2';
// import Item from '@mui/material/Item'

function App() {
  const [newCase, fireCase] = useState(false)
  const [mode, setMode] = useState(false)
  const [lang, setLang] = useState(true)
  const [states, setStates] = useState(0)
  // Generate a random number between 0 and 999
  const randomNumber = Math.floor(Math.random() * 8) + 1;
  const handleClick = () => {
    fireCase(!newCase);

  };
  const handleModeClick = () => {
    setMode(!mode);
  };
  const handleConfClick = () => {
    setStates(prev => prev + 1)
    fireCase(!newCase)
  }
  const handleLang = () => {
    setLang(!lang)
  }

  return (
    <Grid container className='main' spacing={2} sx={{ height: '900', backgroundColor: mode? 'white':'#404040', padding: "10px 5px", overflow: 'hidden'}}>
      <Grid xs={12} sx={{direction: 'rtl', padding: 3}}>
        {mode && <Button variant="contained" onClick={handleModeClick}><Brightness2Icon /> </Button>}
        {!mode && <Button variant="contained" onClick={handleModeClick}><Brightness7Icon /> </Button>}
        <Button variant="contained" onClick={handleLang} sx={{marginRight: 2}}>{lang? 'En' : 'Ar'}</Button>
      </Grid>
      <Grid xs={10}>
        <Grid container spacing={3}>
          <Grid xs={4} spacing={2}>
            <MyCard big={false}  />
          </Grid>
          <Grid xs={4} spacing={2}>
            <MyCard big={false}  />
          </Grid>
          <Grid xs={4} spacing={2}>
            <MyCard big={false}  />
          </Grid>
          {!newCase && <Grid xs={4} spacing={2}>
            <MyCard big={false} />
          </Grid>}
          <Grid xs={4} spacing={2}>
            <MyCard big={false}  />
          </Grid>
          {!newCase && <Grid xs={4} spacing={2}>
            <MyCard big={false} />
          </Grid>}
          {!newCase && <Grid xs={4} spacing={2}>
            <MyCard big={false} />
          </Grid>}
          {!newCase && <Grid xs={4} spacing={2}>
            <MyCard big={false} />
          </Grid>}
          {!newCase && <Grid xs={4} spacing={2}>
            <MyCard big={false} />
          </Grid>}
          {newCase && <Grid xs={8} spacing={2}>
            <MyCard big={true} />
          </Grid>}

  
        </Grid>
      </Grid>
      <Grid xs={2} sx={{padding: 1}}>
        <Grid container sx={{ backgroundColor: mode ? '#5DA6AB' : '#22282E', borderRadius: 4, color: mode ? '#363636' : 'white', textAlign: 'center'}}>
          {!newCase && <>
          <Grid xs={12} sx={{padding: 5}}>
            <Box>
              <ReportGmailerrorredIcon fontSize='large' sx={{ color: 'red', fontSize: 70 }} />
            </Box>
            <Typography sx={{fontSize: 42}}>
              {states}
            </Typography>
            <Typography sx={{fontSize: 24}}>
              {
                lang? 'عدد الحالات المكتشفة اليوم': 'Number of todays cases'
              }
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Grid xs={12} sx={{ padding: 5 }}>
              <Box>
                <SwitchVideoIcon fontSize='large' sx={{ color: 'green', fontSize: 70 }} />
              </Box>
              <Typography sx={{ fontSize: 42 }}>
                17
              </Typography>
              <Typography sx={{ fontSize: 24 }}>
                {lang? 'عدد الكاميرات': "Number of available CCTV"}
              </Typography>
          </Grid>
          </Grid>
          </>}
          {newCase && <>
            <Grid xs={12} sx={{ padding: 5 }}>
              <Box>
                <ReportGmailerrorredIcon fontSize='large' sx={{ color: 'red', fontSize: 180 }} />
              </Box>
              <Typography sx={{ fontSize: 22 }}>
                تم اكتشاف عنف في كاميرا {randomNumber}
              </Typography>
              <Box sx={{marginTop: 5}}>
                <Button variant="contained" onClick={handleClick}>رفض</Button>
                <Button variant="contained" onClick={handleConfClick}  sx={{marginLeft: 3}}>تأكيد</Button>
              </Box>
            </Grid>
          </>}
        </Grid>
        <Button variant="contained" onClick={handleClick} sx={{marginTop:4}}>New Case</Button>
      </Grid>
    </Grid>
  );
}

export default App;
