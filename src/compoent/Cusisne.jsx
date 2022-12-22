import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link,useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'
function Cusisne() {
    const[cuisine,setcuisine]=useState([]);
    const params=useParams();
    useEffect(()=>
    {
        getcusisne(params.type); 
        console.log(params.type);
    },[params.type]);
    
    const getcusisne= async (name)=>
    {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=5c67d592d5314252bfaf69dbab854da1&number=12&cusisne=${name}`
          );
        const data= await api.json();
        setcuisine(data.results);
    }
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}>

      <Grid>
      {
        cuisine.map((item)=>
        {
            return(
                <Card key={item.id}>
                  <Link to={'/recipe/'+item.id}>
                       <motion.img 
                        transition={{type:'spring',stiffness:140}}
                        whileHover={{scale:1.1,
                          boxShadow:'0px 0px 15px rgb(255,255,255)'}}
                        src={item.image} alt="" />
                 
                  </Link>
                    <h4>{item.title}</h4>                   
                </Card>
            );
        })
      }
    </Grid>
    </motion.div>
    
  )
}
const Grid=styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(10rem,1fr));
  grid-gap:2rem;
`;
const Card=styled.div`
   img
   {
    width:100%;
    border-radius:2rem;
   }
   a
   {
    text-decoration:none;
   }
   h4
   {
     text-align:center;
     padding:1rem;
     color:#fff;
   }
`;
export default Cusisne
