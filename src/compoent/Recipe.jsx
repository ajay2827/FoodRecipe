import React from 'react'
import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';
function Recipe() {

    const [recipe,setrecipe]=useState({});
    const [activetab,setActivetab]=useState("instruction");
    const params=useParams();
    useEffect(()=>
    {
        fetchdetail(params.name);
    },[params.name])
    const fetchdetail=async(temp)=>
    {
        const api = await fetch(`https://api.spoonacular.com/recipes/${temp}/information?apiKey=5c67d592d5314252bfaf69dbab854da1`);
        const data = await api.json();
        setrecipe(data);
    }
  return (
    <DetailWrapper>
     <First>
        <h2>{recipe.title}</h2>
        <motion.img 
        whileHover={{scale:1.05,
        boxShadow:'0px 0px 15px rgb(255,255,255)'}}
        transition={{type:'spring',stiffness:150}}
        src={recipe.image} alt="img"/>
     </First>
     <div>
      <Button className={activetab==='instruction'? 'active':''} onClick={()=>setActivetab('instruction')}>Instruction</Button>
      <Button className={activetab==='ingrediants'? 'active':''} onClick={()=>setActivetab('ingrediants')}>Ingrediants</Button>
      {activetab==='instruction'&& (
        <Info>
        <p dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
        <p dangerouslySetInnerHTML={{__html: recipe.instructions}}></p>
      </Info>
      )}
      {activetab==='ingrediants'&&(
           <ul>
           {recipe.extendedIngredients.map((ingredient)=>
           
             <li key={ingredient.id}>{ingredient.original}</li>
           )}
          </ul>
      )}  
     </div>
    </DetailWrapper>
  )
}
 const DetailWrapper=styled.div`
 display: flex;
 justify-content: center;
 margin: 76px 5px;
 justify-content: space-evenly;
 .active
 {
  background:linear-gradient(35deg,#494949,#313131);
  color:white;
 }
   h2
   {
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: 24px;
    font-family: cursive;
    color:#fff;
   }
   li
   {
    font-size:1.2rem;
    line-height:2.5rem;
    color:#fff;
   }
   ul
   {
    margin-top:2rem;
   }
   img
   {
    width: 300px;
    object-fit: cover;
    border: none;
    border-radius: 12px;
   }
 `
 const First = styled.div`
 display: flex;
 flex-direction: column;
 position: relative;
 right: 70px;
 `
 const Button=styled.button`
 margin-right: 10px;
 border: 2px solid black;
 border-radius: 5px;
 width: 100px;
 height: 40px;
 text-align: center;
 font-size: 14px;
 font-family: cursive;
 background: transparent; 
 cursor: pointer;
 `
 const Info=styled.div`
 margin-top: 20px;
 font-size: 17px;
 color: #fff;
 
 `
 
export default Recipe
