import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { json } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

function Veggies() {
  const [veggies, setveggies] = useState([]);

  useEffect(() => {
    getveggies();
  }, []);

  const getveggies = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setveggies(JSON.parse(check));
    } 
    else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=5c67d592d5314252bfaf69dbab854da1&number=10&tag=Vegeterian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setveggies(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Veggies here!!</h3>
        <Splide
          options={{
            perPage: 3,
            rewind: true,
            arrows: false,
            pagination: false,
            drag: "free",
          }}
        >
          {veggies.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card >
                  <Link to={'/recipe/'+recipe.id}>
                  <p>{recipe.title}</p>
                 <motion.img 
                whileHover={{scale:1.1,
                boxShadow:'0px 0px 15px rgb(255,255,255)'}}
                 src={recipe.image} alt={recipe.title} /> 
                  <Gradiant />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  margin: 4rem 0rem;
  position: relative;
  h3
  {
    color:#fff;
  }
`;
const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  margin: 0px 8px;
  position: relative;

  img {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    color: #fff;
    top: 175px;
    left: 50px;
    font-weight: bold;
    margin-left: 10px;
    text-shadow: 3px 4px 2px rbg(1, 1, 1);
    font-size: 16px;
    text-align: center;
  }
`;
const Gradiant = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  z-index: 3;
`;
export default Veggies;
