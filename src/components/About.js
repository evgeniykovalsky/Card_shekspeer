import '../App.css';
import React from 'react';



function About(props) {
  return (

       <div className="conteiner">
    <div className="head">{props.data.name+' '+props.data.surName}</div>

    <div className="mainBody">
        <div className="picture"> 
        <img src={props.data.image1} alt={props.data.id}/>
        <img src={props.data.image2} alt={props.data.id}/>
        <img src={props.data.image3} alt={props.data.id}/>
        </div>
        <div className="description">
            <p><span>Дата рождения:</span> {props.data.yearOfBorn}</p>
            <p><span>Место рождения:</span> {props.data.countryBorn}</p>
            <p><span>Дата смерти:</span> {props.data.yearOfDeath}</p>
            <p className="lsDesc">{props.data.description}</p>
           
        </div>
    </div>
       
 </div>
   
  );
}

export default About;
