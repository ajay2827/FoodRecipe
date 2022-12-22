import React from 'react'
import Home from './Home'
import {Route,Routes, useLocation} from 'react-router-dom'
import Cusisne from '../compoent/Cusisne'
import Gosearch from '../compoent/Gosearch'
import Recipe from '../compoent/Recipe'
import { AnimatePresence } from 'framer-motion'

function Page() {
  const location=useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.path}>
      <Route path='/' element={<Home/>}/>
      <Route path='/cuisine/:type' element={<Cusisne/>}/>
      <Route path='/searched/:search' element={<Gosearch/>} />
      <Route path='/recipe/:name' element={<Recipe/>}/>
    </Routes>
    </AnimatePresence>   
  )
} 

export default Page
