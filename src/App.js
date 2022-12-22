import React, { useState } from 'react'
import Category from './compoent/Category';
import Page from './pages/Page';
import { BrowserRouter, Link} from 'react-router-dom'
import Search from './compoent/Search';
import styled from 'styled-components';
import {GiKnifeFork} from 'react-icons/gi'
function App() {
 
  return (
   <>
   <BrowserRouter>
   <Nav>
    <GiKnifeFork style={{color:'white'}}/>
    <Logo to={'/'}>deliciousss</Logo>
   </Nav>
   <Search/>
   <Category/>
    <Page/>
   </BrowserRouter>    
   </>
  );
}

const Logo=styled(Link)
`
  text-decoration:none;
  font-size:1.5rem;
  font-weight:400;
  font-family:'Lobster Two' , cursive;
  color:#fff;
`

const Nav=styled.div
`
 margin:35px;
 display:flex;
 justify-content:flex-start;
 align-item:center;
}
 svg
 {
  font-size:2rem;
 }
`


export default App;
