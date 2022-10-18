import React from 'react';
import '../style/Testimonio.css';


//src={require(`../images/testimonio-${props.picture}.jpg`)} NO FUNCIONA?

export function Testimonio(props) {
  //let picture = '';
  //Esta sentencia debería funcionar, pero por algún motivo indica "Module not found". Parece que hay elementos en caché antiguos (india, michael, nena).
  let picture = require(`../images/testimonio-${props.picture}.jpg`);
  return (
      <div className='contenedor-testimonio'>
        <img
          className='imagen-testimonio'
          alt={`Foto de ${props.name}`}
          title={`Foto de ${props.name}`}
          src={picture}
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>{props.name} en {props.country}</p>
          <p className='cargo-testimonio'>{props.job} en {props.company}</p>
          <p className='texto-testimonio'>"{props.testimony}"</p>
        </div>
      </div>
    );
}
