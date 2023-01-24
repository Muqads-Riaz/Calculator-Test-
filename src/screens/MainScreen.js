import React from 'react'
import { Grid} from '@mui/material';
import { useState } from 'react';
import MyInput from '../components/MyInput';
import MyButton from '../components/MyButton';

export default function MainScreen() {
    let[inputValue , setInputValue] = useState("")
  let[calculated , setCalculated] = useState(false)

  let btnValue = (e)=>{
  let val = inputValue;
  let num = e.target.textContent
  if(calculated && (typeof num == "number")){
    console.log(typeof num)
    setInputValue("");
    val = ""
  }
  setInputValue("");
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
  let back = ()=>{
    setInputValue(inputValue.slice(0 , -1))
  }
  let sqrt  = ()=>{
    if(calculated){
      setInputValue(Math.sqrt(inputValue).toFixed(5))
    }else{
      setInputValue(Math.sqrt(eval(inputValue)).toFixed(5))
      setCalculated(true);
    }
  }
let per = ()=>{
  if(calculated){
    setInputValue(inputValue / 100)
  }else{
    setInputValue((eval(inputValue)) / 100)
    setCalculated(true);
  }

}
  return (
    <div className="parent">
    <div className="main">
     <div className='heading'>Calculator App</div>
     <MyInput value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} />
   <Grid container>
     <Grid item xs={12} sm={12} md={12} lg={12} >
     <div style={{margin:"15px" , display:"flex" , justifyContent:"space-between"}}>
       <MyButton onClick={clearAll} label="clr"/>
       <MyButton onClick={back}  label="←"/>
       <MyButton onClick={sqrt}  label="√"/>
       <MyButton onClick={per} label="%"/>
     </div>
       <div style={{margin:"15px" , display:"flex" , justifyContent:"space-between"}}>
       <MyButton onClick={(e)=>{btnValue(e)}} label="7"/>
       <MyButton onClick={(e)=>{btnValue(e)}} label="8"/>
       <MyButton onClick={(e)=>{btnValue(e)}} label="9"/>
       <MyButton onClick={(e)=>{btnValue(e)}} label="/"/>
     </div>
     <div style={{margin:"15px" , display:"flex" , justifyContent:"space-between"}}>
       <MyButton onClick={(e)=>{btnValue(e)}} label="4"/>
       <MyButton onClick={(e)=>{btnValue(e)}} label="5"/>
       <MyButton onClick={(e)=>{btnValue(e)}} label="6"/>
       <MyButton onClick={(e)=>{btnValue(e)}} label="*"/>
     </div>
     <div style={{margin:"15px" , display:"flex" , justifyContent:"space-between"}}>
     <MyButton onClick={(e)=>{btnValue(e)}} label="1"/>
     <MyButton onClick={(e)=>{btnValue(e)}} label="2"/>
     <MyButton onClick={(e)=>{btnValue(e)}} label="3"/>
     <MyButton onClick={(e)=>{btnValue(e)}} label="-"/>
     </div>
     <div style={{margin:"15px" , display:"flex" , justifyContent:"space-between"}}>
     <MyButton onClick={(e)=>{btnValue(e)}} label="0"/>
     <MyButton onClick={(e)=>{btnValue(e)}} label="."/>
     <MyButton onClick={calculate} label="="/>
     <MyButton onClick={(e)=>{btnValue(e)}} label="+"/>
     </div>
     </Grid>

   </Grid>
    </div>
 </div>
  )
}
