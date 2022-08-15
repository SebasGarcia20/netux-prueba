import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import logo from '../../../assets/imgs/Cruz verde small.png'
import { Button, DialogContent } from '@mui/material';

import './ModalTurno.css'
import styled from '@emotion/styled';

const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '2px solid #1F9547',
    borderRadius: '25px',
    lineHeight: 1.5,
    marginTop: '10px',
    backgroundColor: 'white',
    borderColor: '#1F9547',
    color: '#1F9547',
    width: '100%',
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
        color: 'white',
        backgroundColor: '#1F9547',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#1F9547',
    },
});

export default function ModalTurno(props) {
    const { onClose, open, nombre, savePDF} = props;

    const handleClose = () => {
        onClose(false);
    };

    return (
        <Dialog onClose={handleClose} open={open} PaperProps={{
            style: { borderRadius: 10 }
        }}>
            <DialogTitle className='dialog-title'><img src={logo} alt='Logo de la Cruz de Verde'></img></DialogTitle>
            <DialogContent className='center'>
                <h3 className='title'>¡Has solicitado tu <br /> turno con éxito!</h3>
                <div className='contenedor-texto'>
                    <span> Usuario: </span>
                    <span className='negrilla'> {nombre} </span>
                </div>
                <div className='contenedor-texto'>
                    <span> Servicio: </span>
                    <span className='negrilla'> Consulta externa </span>
                </div>
                <div className='contenedor-texto'>
                    <span> Dirección: </span>
                    <span className='negrilla'> Calle 1 #87 - 78 Bellavista </span>
                </div>
                <div className='contenedor-texto'>
                    <span> Hora: </span>
                    <span className='negrilla'> 02:00pm </span>
                </div>
                <div className='contenedor-texto'>
                    <CustomButton onClick={savePDF}> Descargar PDF </CustomButton>
                </div>
            </DialogContent>
        </Dialog>
    );
}

ModalTurno.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};
