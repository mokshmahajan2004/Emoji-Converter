import React, { useState } from 'react'
import "./MainPage.css";
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
    const Navigate= useNavigate();
    const [name,setName]= useState('');
const handleChange=(e)=>{
    setName(e.target.value);

}
const handleNextBtn = ()=>{
    localStorage.setItem("name",name);
    Navigate("/converter");
}

console.log(name);

  return (
    <>
    <div className='main_container'>
        <h1>Welcome to editor</h1>
    <br></br>
      Please enter your name:
      <br></br>
      <span><input type='text' placeholder='Enter Your name:' onChange={handleChange}  ></input><button id='next_name' onClick={handleNextBtn}>Next</button></span>
    </div>
    </>
  )
}

export default MainPage