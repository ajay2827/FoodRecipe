import React from 'react'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Search() {
   const [input,setinput]=useState('');
   const nav=useNavigate();
   const Eventhandle=(e)=>
   {
       e.preventDefault();
       nav('/searched/'+input)
   }

  return (
      <Formstyle onSubmit={Eventhandle}>             
        <div>
        <FaSearch></FaSearch>
        <input onChange={(e)=> setinput(e.target.value)} type="text" value={input}/>
        </div>        
      </Formstyle>

  )
}

const Formstyle=styled.form`

  margin:0rem 20rem;
  div
  {
    width:100%;
    position:relative;
    display: flex;
    flex-direction:row;
  }
  input
  {
    border:none;
    background: linear-gradient(35deg,#494949,#313131);
    font-size: 1.5rem;
    color:#fff;
    padding: 1rem 3rem;
    width:100%;
    border-radius:10px;
    outline:none;
  }
  svg
  {
    position: absolute;
    color: white;
    left: -29px;
    font-size: 21px;
    top: 21px;
  }
 
`
export default Search

