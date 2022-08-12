import React, { useState } from 'react';



function  Tvir(props) {

 const[description,setDescription]= useState(false);

  return (
    <div className="conteiner">
          <div className="footer">
               <button onClick={()=>setDescription(prev =>!prev)}>{description? 'Cкрыть':'Подробнее..'}</button>
               {description && <p>{props.data.allDescription}</p>}
          </div>
    </div>

  );
}

export default Tvir;
