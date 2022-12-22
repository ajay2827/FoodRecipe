import {GiChopsticks,GiNoodles} from 'react-icons/gi';
import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

import React from 'react'

function Category() {
  return (
    <List>
        <Slink to={"/cuisine/Italian"}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisine/American"}>
        <FaHamburger/>
        <h4>American</h4>
      </Slink>
      
      <Slink to={"/cuisine/Thai"}>
        <GiNoodles/>
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/cuisine/Japanese"}> 
        <GiChopsticks/>
        <h4>Japanese</h4>
      </Slink>
    </List>
  )
}
const List=styled.div
`
display: flex;
justify-content: center;
align-items: center;
margin: 10px 20px;  
`
const Slink=styled(NavLink)
`
display: flex;
flex-direction: column;
justify-content: center;
      align-items: center;
border-radius: 50%;
width: 6rem;
height: 6rem;
background-color: rgba(65, 63, 63, 0.786);
margin: 6px;
text-decoration: none;
text-align: center;
transform: scale(0.7); 
h4
{
  font-size:17px;
  color:#fff;
  margin:2px;
}
svg
{
  font-size:35px;
  color:#fff;
}
&.active
{
  background:linear-gradient(to right,#f27121,#e94057);
  h4
  {
    color:#fff;
  }
  svg
  {
    color:#fff;
  }
}
`
export default Category
