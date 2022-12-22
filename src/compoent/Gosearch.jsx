import React from 'react'
import styled from 'styled-components';
import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Gosearch() {
    const[searched,setsearched]=useState([]);
    const params=useParams();
    useEffect(()=>
    {
        getsearched(params.search); 
    },[params.search]);

    const getsearched= async (name)=>
    {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=5c67d592d5314252bfaf69dbab854da1&number=12&query=${name}`
          );
        const data= await api.json();
        setsearched(data.results);
    }

  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}>
         <Grid>
      {
        searched.map((item)=>
        {
            return(
                <Card key={item.id}>
                  <Link to={'/recipe/'+item.id}>
                    <motion.img 
                        transition={{type:'spring',stiffness:140}}
                        whileHover={{scale:1.1,
                          boxShadow:'0px 0px 15px rgb(255,255,255)'}} src={item.image} alt="" />
                    <h4>{item.title}</h4>
                    </Link>
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
     color: #fff;
   }
`;
export default Gosearch
