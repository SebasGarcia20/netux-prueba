import * as React from 'react';
import logo from '../../../assets/imgs/Cruz verde small.png'
import { Button, DialogContent } from '@mui/material';

import './ModalTurnoPDF.css'
import styled from '@emotion/styled';

export default function ModalTurnoPDF(props) {
    const { nombre, numDoc, tipoDoc } = props;

    return (
        <div style={{ textAlign: 'center' }}>
            <div className='dialog-title'><img src={logo} alt='Logo de la Cruz de Verde'></img></div>
            <div className='center'>
                <h3 className='title'>¡Has solicitado tu <br /> turno con éxito!</h3>
                <div className='contenedor-texto'>
                    <span> Usuario: </span>
                    <span className='negrilla'> {nombre} </span>
                </div>
                <div className='contenedor-texto'>
                    <span> Documento: </span>
                    <span className='negrilla'> {tipoDoc} </span>
                </div>
                <div className='contenedor-texto'>
                    <span> Número documento: </span>
                    <span className='negrilla'> {numDoc} </span>
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
            </div>
        </div>
    );
}

