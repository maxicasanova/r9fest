import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Box } from '@mui/material';
import Confirmation from './components/Form/Confirmation';
import ContactForm from './components/Form/ContactForm';
import CssBaseline from '@mui/material/CssBaseline';
import Legal from './components/Form/Legal';
import Mulato from './components/Form/Mulato';
import Player from './components/Player';
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main:'#FBF3FF'
    },
    secondary: {
      main:'#FFCE41'
    }
  },
});

function App() {

  const [init, setInit] = React.useState(false)

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter >
        <Box className='App'>
          <Player url='https://firebasestorage.googleapis.com/v0/b/r9producciones17s.appspot.com/o/sound.mp3?alt=media&token=fbe45f4e-52e2-4317-967f-777a263b4a18' init={init}/>
        <Routes>
          <Route exact path='/' element={<ContactForm setInit={setInit} />} />
          <Route exact path='/confirmation' element={<Confirmation/>} />
          <Route exact path='/legal' element={<Legal/>} />
          <Route exact path='/mulato' element={<Mulato/>} />
        </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
