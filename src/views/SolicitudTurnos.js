import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { BarProgress } from '../components/BarProgress'
import './SolicitudTurnos.css'
import { Alert, Button, Grid, Snackbar, TextField } from '@mui/material';
import img1 from '../assets/imgs/Grupo 1376.svg'
import ModalTurno from '../components/SolicitudTurno/Modal/ModalTurno';
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import reactElementToJSXString from 'react-element-to-jsx-string';
import ModalTurnoPDF from '../components/SolicitudTurno/ModalTurnoPDF/ModalTurnoPDF';


const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    borderRadius: '25px',
    lineHeight: 1.5,
    backgroundColor: '#3F3F41',
    borderColor: '#3F3F41',
    color: 'white',
    width: '80%',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#59595C',
        borderColor: '#59595C',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#59595C',
        borderColor: '#59595C',
    },
});

export const SolicitudTurnos = () => {

    const [tipoDoc, setTipoDoc] = useState('')
    const [numDoc, setNumDoc] = useState('')
    const [primerNom, setPrimerNom] = useState('')
    const [segundoNom, setSegundoNom] = useState('')
    const [primerApe, setPrimerApe] = useState('')
    const [segundoApe, setSegundoApe] = useState('')
    const [step, setStep] = useState(2)

    const [open, setOpen] = useState(false)
    const [openAlerta, setOpenAlerta] = useState(false)

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlerta(false);
    };

    const htmlString = renderToStaticMarkup(<ModalTurnoPDF nombre={primerNom + ' ' + segundoNom + ' ' + primerApe + ' ' + segundoApe} tipoDoc={tipoDoc} numDoc={numDoc} />);
    const SaveAsPdf = () => {
        var api_endpoint = "https://selectpdf.com/api2/convert/";
        var api_key = "e22ec109-ab02-446e-9971-51a59ed6272a";

        var params = {
            key: api_key,
            html: htmlString.toString()
        }

        var xhr = new XMLHttpRequest();
        xhr.open('POST', api_endpoint, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.responseType = 'arraybuffer';

        xhr.onload = function (e) {
            if (this.status == 200) {
                //console.log('Conversion to PDF completed ok.');

                var blob = new Blob([this.response], { type: 'application/pdf' });
                var url = window.URL || window.webkitURL;
                var fileURL = url.createObjectURL(blob);
                //window.location.href = fileURL;

                //console.log('File url: ' + fileURL);

                var fileName = "Document.pdf";

                if (navigator.appVersion.toString().indexOf('.NET') > 0) {
                    // This is for IE browsers, as the alternative does not work
                    window.navigator.msSaveBlob(blob, fileName);
                }
                else {
                    // This is for Chrome, Firefox, etc.
                    var a = document.createElement("a");
                    document.body.appendChild(a);
                    a.style = "display: none";
                    a.href = fileURL;
                    a.download = fileName;
                    a.click();
                }
            }
            else {
                //console.log("An error occurred during conversion to PDF: " + this.status);
                alert("An error occurred during conversion to PDF.\nStatus code: " + this.status + ", Error: " + String.fromCharCode.apply(null, new Uint8Array(this.response)));
            }
        };

        xhr.send(JSON.stringify(params));
    }

    const handleOpen = () => {
        //Revisar que todos los campos esten completos
        if (tipoDoc && numDoc && primerNom && primerApe && segundoApe) {
            setStep(4);
            setOpen(true);
        } else {
            setOpenAlerta(true)
        }
    }


    return (
        <>
            <BarProgress step={step} />
            <Grid container spacing={1}>
                <Grid item xs={5} className="contenedor-formulario" >
                    <h2 className='color-title'>Ingresa tus datos</h2>
                    <Grid container spacing={1} alignItems='center'>
                        <Grid item xs={12}>
                            <FormControl variant="standard" style={{ width: '100%' }}>
                                <InputLabel id="demo-simple-select-standard-label">Tipo de documento</InputLabel>
                                <Select
                                    id="demo-simple-select-standard"
                                    value={tipoDoc}
                                    onChange={(e) => setTipoDoc(e.target.value)}
                                    label=""
                                >
                                    <MenuItem value='Cédula de ciudadanía'>Cédula de ciudadanía</MenuItem>
                                    <MenuItem value='Tarjeta de identidad'>Tarjeta de identidad</MenuItem>
                                    <MenuItem value='Cédula extranjera'>Cédula extranjera</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={numDoc}
                                onChange={(e) => setNumDoc(e.target.value)}
                                fullWidth
                                label="Número de documento"
                                variant='standard'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                value={primerNom}
                                onChange={(e) => setPrimerNom(e.target.value)}
                                label="Primer nombre"
                                variant='standard'
                            />

                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                value={segundoNom}
                                onChange={(e) => setSegundoNom(e.target.value)}
                                label="Segundo nombre"
                                variant='standard'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                value={primerApe}
                                onChange={(e) => setPrimerApe(e.target.value)}
                                label="Primer apellido"
                                variant='standard'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                value={segundoApe}
                                onChange={(e) => setSegundoApe(e.target.value)}
                                label="Segundo apellido"
                                variant='standard'
                            />
                        </Grid>
                        <Grid item xs={12} className='contenedor-direccion'>
                            <span className='texto-sede'>Sede 1</span>
                            <span className='texto-direccion'> Calle 1 #87 - 78 Bellavista</span>
                            <span className='texto-direccion'> Horario: 2:00pm</span>
                        </Grid>
                        <Grid item xs={12} className='contenedor-button'>
                            <CustomButton onClick={() => handleOpen()}> Siguiente </CustomButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={7} className='contenedor-img' >
                    <img src={img1} alt='fondo 2'></img>
                </Grid>
            </Grid>
            <ModalTurno
                onClose={setOpen}
                open={open}
                nombre={primerNom + ' ' + segundoNom + ' ' + primerApe + ' ' + segundoApe}
                savePDF={SaveAsPdf}
            />
            <Snackbar open={openAlerta} autoHideDuration={2000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }}>
                    Es necesario completar todos los campos
                </Alert>
            </Snackbar>
        </>
    )
}
