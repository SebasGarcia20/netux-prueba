import { Card } from '@mui/material'
import React from 'react'
import logoCruzVerde from '../../assets/imgs/CruzVerde.png'
import flechaIzq from '../../assets/imgs/Grupo 8.png'
import PasosProgress from '../PasosProgress/PasosProgress'



import './BarProgress.css'

export const BarProgress = ({ step }) => {
  return (
    <div className='header'>
      <Card className='title-header-logo'>
        <img src={logoCruzVerde} alt="Logo Cruz Verde">
        </img>
      </Card>
      <Card className='title-header-progress'>
        <div className='contenedor-progress'>
          <div className='contenedor-volver'>
            <img src={flechaIzq} alt="Flecha hacia la izquierda"></img>
            <span>atras</span>
          </div>
          <div>
            <PasosProgress step={step} />
          </div>
          <div className='contenedor-logo'>
            <span className='text-logo'>netux</span>
            <span className='text-sublogo'>2020 Netux</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
