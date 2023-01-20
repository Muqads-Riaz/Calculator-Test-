import React from 'react'
import { TextField } from '@mui/material'

export default function MyInput(props) {
  return (
    <TextField onChange={props.onChange} value={props.value} sx={{margin:"12px"}} variant='outlined'/>
  )
}
