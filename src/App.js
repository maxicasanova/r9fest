import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Box } from '@mui/material';
import Confirmation from './components/Form/Confirmation';
import ContactForm from './components/Form/ContactForm';
import CssBaseline from '@mui/material/CssBaseline';
import Legal from './components/Form/Legal';
import Mulato from './components/Form/Mulato';

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
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter >
        <Box className='App'>
        <Routes>
          <Route exact path='/' element={<ContactForm/>} />
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
