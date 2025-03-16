import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import DownloadBill from './DownloadBill'

export default function BillForm () {
  const [cliente, setCliente] = useState('')
  const [fecha, setFecha] = useState('')
  const [items, setItems] = useState([])

  const handlerChangeCliente = (e) => {
    setCliente(e)
  }

  const handlerChangeFecha = (e) => {
    setFecha(e)
  }

  return (
    <div>
      <TextField
        label='Cliente' variant='outlined' fullWidth
        onChange={(e => handlerChangeCliente(e.target.value))}
      />
      <TextField
        label='Fecha' type='date' variant='outlined' fullWidth
        onChange={(e => handlerChangeFecha(e.target.value))}
      />
      <Button variant='contained' color='primary'>

        <DownloadBill datos={{
          cliente,
          fecha,
          items: [
            {
              nombre: 'Consultoría',
              cantidad: 1,
              precio: 300
            },
            {
              nombre: 'Asesoría',
              cantidad: 1,
              precio: 150
            },
            {
              nombre: 'Servicios financieros',
              cantidad: 1,
              precio: 500
            },
            {
              nombre: 'Horas extra',
              cantidad: 6,
              precio: 20
            }
          ]

        }}
        />

      </Button>
    </div>
  )
}
