import React, { useEffect, useState } from 'react'
import'./body.css';
export const Timer = () => {
    const [days,setdays] = useState(0);
    const [hours,sethours] = useState(24);
    const [minutes,setminutes] = useState(60);
    const [seconds,setseconds] = useState(60);
    useEffect(()=>{
        setTimeout(()=>{
            if(minutes === 0){
                sethours(hours-1);
                setminutes(60);
            }
            else if(seconds === 0){
                setminutes(minutes-1);
                setseconds(60);
            }
           else setseconds(seconds-1);
        },1000);
    },[seconds])
  return (
    <div>
        <h1 className='clock'>
        <span>{days} |</span>
        <span>{hours} | </span>
        <span>{minutes} | </span>
        <span>{seconds}</span>
     <h1><span className='font1'>days hrs mins secs</span></h1>
     
        
        </h1>
    </div>
  )
}
