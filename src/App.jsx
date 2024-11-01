import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const backgroundColorRed = ()=> {
    document.body.style.backgroundColor = "red"
  };
  const backgroundColorGreen = ()=> {
    document.body.style.backgroundColor = "green"
  };
  const backgroundColorPink = ()=> {
    document.body.style.backgroundColor = "pink"
  };
  const backgroundColorBlue = ()=> {
    document.body.style.backgroundColor = "blue"
  };
  const backgroundColorPurple = ()=> {
    document.body.style.backgroundColor = "purple"
  };
  const backgroundColorLime = ()=> {
    document.body.style.backgroundColor = "lime"
  };
  const backgroundColorGray = ()=> {
    document.body.style.backgroundColor = "lightGray"
  };
  const backgroundColorYellow = ()=> {
    document.body.style.backgroundColor = "yellow"
  };
  const backgroundColorBlack = ()=> {
    document.body.style.backgroundColor = "black"
  };
  const backgroundColorSky = ()=> {
    document.body.style.backgroundColor = "skyblue"
  };
  const backgroundColorWhite = ()=> {
    document.body.style.backgroundColor = "white"
  };
  

  return (
    <>

    <div id='contenor'>
      <button id='red' onClick={backgroundColorRed} style={{padding:"10px  25px" , fontSize :"12px"}}>Red</button>

      <button id='White' onClick={backgroundColorWhite} style={{padding:"10px  20px" , fontSize :"12px"}}>White</button>

      <button id='Sky' onClick={backgroundColorSky} style={{padding:"10px  20px" , fontSize :"12px"}}>Sky</button>

      <button id='Green' onClick={backgroundColorGreen} style={{padding:"10px  20px" , fontSize :"12px"}}>Green</button>

      <button id='Yellow' onClick={backgroundColorYellow} style={{padding:"10px  20px" , fontSize :"12px"}}>Yellow</button>

      <button id='Pink' onClick={backgroundColorPink} style={{padding:"10px  20px" , fontSize :"12px"}}>Pink</button>

      <button id='Lime' onClick={backgroundColorLime} style={{padding:"10px  20px" , fontSize :"12px"}}>Lime</button>

     <button id='Purple' onClick={backgroundColorPurple} style={{padding:"10px  20px" , fontSize :"12px"}}>Purple</button>

      <button id='Blue' onClick={backgroundColorBlue} style={{padding:"10px  20px" , fontSize :"12px"}}>Blue</button>

      <button id='lightGray' onClick={backgroundColorGray} style={{padding:"10px  20px" , fontSize :"12px"}}>lightGray</button>

      <button id='Black' onClick={backgroundColorBlack} style={{padding:"10px  20px" , fontSize :"12px"}}>Black</button>

     

     
    </div>
   
   

    </>
  )
}

export default App
