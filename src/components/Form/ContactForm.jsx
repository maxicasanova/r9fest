import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Slide from '@mui/material/Slide';

function ContactForm() {

    const navigate = useNavigate();

    const generos = ['Masculino', 'Femenino', 'Otro'];
    const frecuencia = ['Nunca fui a una', 'Casualmente', 'Frecuentemente', 'Muy Frecuentemente']
    const [checked, setChecked] = useState(false);

    const[delay, setDelay] = useState(false);
    const [mail, setMail] = useState('');
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [provincia, setProvincia] = useState('');
    const [nacimiento, setNacimiento] = useState(new Date());
    const [genero, setGenero] = useState('');
    const [freq, setFreq] = useState('');

    const [mailError, setMailError] = useState(false);
    const [telefonoError, setTelefonoError] = useState(false);
    const [condiError, setCondiError] = useState(false);
    const [emptyError, setEmptyError] = useState(false);
    
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    setTimeout(() => {
        setDelay(true)
    }, 3000);

    const comprobacion = () => {
        if(mail.length > 0){
            !mail.match(mailformat) && setMailError(true);
        }
        if(telefono.length > 0){
            telefono < 1000000000 && setTelefonoError(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!mail.length || !telefono.length || !nombre.length || !provincia.length || !freq.length){
            setEmptyError(true);
            return
        }
        
        if(checked && !mailError && !telefonoError && !emptyError){
            console.log('ok');
            grabacion();
        } else if (!condiError){
            setCondiError(true)
        }

    }

    const grabacion = () => {
        const infoCliente = {
            nombre, 
            mail,
            telefono,
            provincia,
            nacimiento,
            genero,
            freq
        }

        const db = getFirestore();
        const newOrderRef = doc(collection(db, "clientes"));
        setDoc(newOrderRef, infoCliente)
            .then(() => {
                navigate('/confirmation')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect (() => {
        setMailError(false);
        setTelefonoError(false);
        setEmptyError(false);
        checked && setCondiError(false);
        comprobacion();
    },[telefono, mail, checked])
    
    return (
        <Slide direction="up" in={delay} style={{ transitionDelay:'800ms'}}>
        
        <Container 
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent: 'center',
                color:'white',
                minHeight:'80vh'
            }}>

            <Box 
            sx={{
                display: 'flex', 
                flexDirection: 'column', 
                minHeight:'30vh', 
                justifyContent:'center', 
                alignItems:'center',
                mt:'20px',
                padding:'10px',
                background: 'rgba(0, 0, 0, 0.48)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(15.3px)',
                border: '1px solid rgba(255, 255, 255, 0.52)'
            }}>
                <form
                    noValidate 
                    autoComplete='off' 
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <Box>
                        <Typography component='h1' variant='h4' sx={{paddingTop:'30px', paddingBottom:'30px', background:'rgba(0, 0, 0, 0.38)'}}>
                            Por favor completá este formulario.
                        </Typography>
                        <Typography>
                            Estos datos seran utilizados para el sorteo.
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: {xs:'80vw', sm: '50vw'},
                        marginTop: '20px',
                        marginBottom:'20px',
                        display:'flex',
                        flexDirection:'column',
                        justiifyContent: 'center',
                        alignItems:'center',
                        flexWrap: 'nowrap',
                        gap:'10px'
                        }}>
                    <TextField
                            label='Nombre completo:' 
                            placeholder='Minimo 3 caracteres'
                            variant='outlined'
                            color='secondary'
                            value={nombre}
                            onChange={(e) => {setNombre(e.target.value)}}
                            fullWidth
                            required
                        />
                    <TextField
                            onChange={(e) => {setMail(e.target.value)}}
                            label='Mail:'
                            value={mail}
                            placeholder='Debe tener la forma alguien@ejemplo.com'
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            required
                            error={mailError}
                            type='mail'
                        />
                    {mailError && <Typography variant='caption' color='error'>
                        Por favor ingrese un mail valido. No se aceptan espacios.
                    </Typography>}
                    <TextField
                            label="Teléfono:"
                            placeholder='Ingrese su numero con la caracteristica sin 0 ni 15.'
                            color='secondary'
                            required
                            type='number'
                            value={telefono}
                            error={telefonoError}
                            onChange={(e) => {setTelefono(e.target.value)}}
                            sx={{
                                width:'100%'
                            }}
                            />
                    {telefonoError && <Typography variant='caption' color='error'>
                        Escriba su numero con la caracteristica sin 0 ni 15.
                    </Typography>}
                    <TextField
                        label="Provincia:"
                        placeholder='Ingrese su provincia de residencia'
                        color='secondary'
                        value={provincia}
                        onChange={(e) => {setProvincia(e.target.value)}}
                        required
                        sx={{
                            width:'100%'
                        }}
                        />
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DatePicker
                            color='secondary'
                            disableFuture
                            label="Fecha de Nacimiento"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={nacimiento}
                            onChange={(newValue) => {
                                setNacimiento(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} color='secondary' sx={{minWidth:{xs:'80vw', sm:'40vw'}}}/>}
                            />
                        </LocalizationProvider>
                    <FormControl>
                        <InputLabel id="gender-label">Género:</InputLabel>
                        <Select
                            sx={{minWidth:{xs:'80vw', sm:'40vw'}}}
                            labelId="gender-label"
                            id="gender-select"
                            required
                            color='secondary'
                            value={genero}
                            onChange={(e) => {setGenero(e.target.value)}}
                        >
                            {generos.map(g => (
                                <MenuItem required value={g} key={g}>{g}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl required>
                        <InputLabel id="freq-label" sx={{fontSize:'14px'}}>Con qué frecuencia asistis a fiestas de electronica?</InputLabel>
                        <Select
                            sx={{minWidth:{xs:'80vw', sm:'40vw'}}}
                            labelId="freq-label"
                            id="gender-select"
                            color='secondary'
                            value={freq}
                            onChange={(e) => {setFreq(e.target.value)}}
                        >
                            {frecuencia.map(g => (
                                <MenuItem required value={g} key={g}>{g}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControlLabel 
                        control={
                            <Checkbox onChange={(e) => {setChecked(e.target.checked)}} 
                            />} 
                        label="Acepto los Terminos y condiciones" 
                    />
                    <Link to='/legal' style={{textDecoration: 'none', color:'whitesmoke', "&:hover": {color: "#FFCE41"}}}>
                        Ver Condiciones
                    </Link>
                    {condiError && <Typography variant='caption' color='error'>
                        Debes aceptar la politica de uso de datos.
                    </Typography>}
                    {emptyError && <Typography variant='caption' color='error'>
                        Por favor completa todos los campos.
                    </Typography>}
                    <Button type='submit' variant='contained' sx={{backgroundColor:'#FFCE41'}}>
                        Enviar
                    </Button>
                    </Box>
                </form>
            </Box>
        </Container>
        </Slide>
    )
}

export default ContactForm