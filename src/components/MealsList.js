import React, { useContext } from "react";
import styled from "styled-components";
import Meal from "./Meal";
import { MealContext } from "./MealContext";
import { motion } from "framer-motion";

const Conatiner = styled.div`
  padding: 2rem;
  display: grid;
  place-items: center;
`;

const Title = styled.h3`
  text-align: left;
  margin-bottom: 2rem;
  color: rgb(44, 46, 46);
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 1rem;
  justify-content: space-evenly;
  align-items: center;
`;

const MealsList = () => {
  //Consume Context
  const { allMeals } = useContext(MealContext);
  // console.log(allMeals);

  const allMealsList = allMeals.map((meal) => (
    <Meal meal={meal} key={meal.idMeal} />
  ));
  return (
    <Conatiner>
      <Title
        as={motion.h3}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        Suggested For You
      </Title>
      <Wrapper>{allMealsList}</Wrapper>
    </Conatiner>
  );
};

export default MealsList;
