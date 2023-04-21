import React, { useState, useRef } from 'react';
import styles from "./Card.module.css"

const Card = ({titulo, descripcion, cardKey, btnFunction=()=>{}, btnText}) => {
var encendido = true
  const [hechoOnOff, setHechoOnOff] = useState(false)

  let colorFondo = "pink"
  let estadoTarea = "Por hacer..."
  const cambiarEstado = ()=>{
      setHechoOnOff(!hechoOnOff)
  }
  
  if(hechoOnOff){
    colorFondo = "lightgreen"
    estadoTarea = "HECHO!!!"
  }

  return (
        <>
        <div onClick={cambiarEstado} className={styles.container} style={{background:colorFondo}} >
          <small>{estadoTarea}</small>
          {/* <h6>{cardKey}</h6> */}
          <h2>{titulo}</h2>
          <h4>{descripcion}</h4>
          <button onMouseDown={btnFunction}>{btnText}</button>
        </div>
        {console.log(hechoOnOff)}
        </>
    
    
   
  )
}

export default Card