import React from 'react'
import { Button } from '@mui/material'

export default function MyButton(props) {
  return (
    <Button onClick={props.onClick} variant="contained">{props.label}</Button>
  )
}
