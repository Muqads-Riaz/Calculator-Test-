import logo from './logo.svg';
import './App.css';
import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';

function App() {
  let[inputValue , setInputValue] = useState("")
  let[calculated , setCalculated] = useState(false)


  let btnValue = (e)=>{
  let val = inputValue;
  let num = parseInt(e.target.textContent)
  if(calculated && (typeof num === "number")){
    setInputValue("");
    val = ""
  }
  setInputValue(val + e.target.textContent)
  setCalculated(false);
  }
  

  let calculate = () => {
    setInputValue(eval(inputValue));
    setCalculated(true);
  }

  let clearAll = ()=>{
    setInputValue("")
  }
  return (
    <div className="parent">
       <div className="main">
        <div className='heading'>Calculator App</div>
        <TextField value={inputValue} disabled sx={{margin:"12px"}} variant='outlined'/>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} >
          <div style={{margin:"15px" , display:"flex" , justifyContent:"space-between"}}>
        <Button onClick={(e)=>{btnValue(e)}} variant="contained">7</Button>
        <Button onClick={(e)=>{btnValue(e)}} variant="contained">8</Button>
        <Button onClick={(e)=>{btnValue(e)}} variant="contained">9</Button>
        <Button onClick={(e)=>{btnValue(e)}} variant="contained">/</Button>
        </div>
        <div style={{margin:"15px" , display:"flex" , justifyContent:"space-between"}}>
        <Button onClick={(e)=>{btnValue(e)}} variant="contained">4</Button>
        <Button onClick={(e)=>{btnValue(e)}} variant="contained">5</Button>
        <Button onClick={(e)=>{btnValue(e)}} variant="contained">6</Button>
        <Button onClick={(e)=>{btnValue(e)}} variant="contained">*</Button>
        </div>
        <div style={{margin:"15px" , display:"flex" , justifyContent:"space-between"}}>
        <Button onClick={(e)=>{btnValue(e)}} variant="contained">1</Button>
        <Button onClick={(e)=>{btnValue(e)}} variant="contained">2</Button>
        <Button onClick={(e)=>{btnValue(e)}} variant="contained">3</Button>
        <Button onClick={(e)=>{btnValue(e)}} variant="contained">-</Button>
        </div>
        <div style={{margin:"15px" , display:"flex" , justifyContent:"space-between"}}>
        <Button onClick={clearAll} variant="contained">clr</Button>
        <Button onClick={(e)=>{btnValue(e)}} variant="contained">0</Button>
        <Button onClick={(e)=>{btnValue(e)}} variant="contained">+</Button>
        <Button onClick={calculate} variant="contained">=</Button>
        </div>
        </Grid>

      </Grid>
       </div>
    </div>
  );
}

export default App;

