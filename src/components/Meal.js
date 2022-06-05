import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { FaSearch, FaEdit, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MealContext } from "./MealContext";
import { motion } from "framer-motion";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Conatiner = styled.div`
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const ImageConatiner = styled.div`
  width: 100%;
  height: 20rem;

  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;

  a {
    color: #000;
  }

  &:hover {
    background-color: #e9f5f5;
    /* transform: scale(1.1); */
  }
`;

const NewTag = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  background-color: rgb(255, 227, 17);
`;

const UpdateTag = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  background-color: #3c4a5b;
  color: white;
`;

const iconVariants = {
  hover: {
    boxShow: "0px 0px 20px rgb(255, 255, 255)",
    backgroundColor: "#53CBF0",
    scale: 1.3,
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};
const Meal = ({ meal }) => {
  //Consume Context
  const { deleteMeal } = useContext(MealContext);

  return (
    <Conatiner>
      <Card
        style={{
          width: "22rem",
          height: "27rem",
          boxShadow: "rgba(99,99,99,0.2) 0px 2px 8px 0px",
          textAlign: "center",
          borderRadius: "2rem",
          marginBottom: "2rem",
        }}
      >
        {meal.isNew ? (
          <NewTag>NEW</NewTag>
        ) : (
          meal.isUpdate && <UpdateTag>UPDATED</UpdateTag>
        )}
        <Info>
          <Icon as={motion.div} variants={iconVariants} whileHover="hover">
            <Link to={`/mealDetails/${meal.strMeal}`} state={{ meal }}>
              <FaSearch />
            </Link>
          </Icon>
          <Icon as={motion.div} variants={iconVariants} whileHover="hover">
            <Link to={`/editMeal/${meal.strMeal}`} state={{ meal }}>
              <FaEdit />
            </Link>
          </Icon>
          <Icon as={motion.div} variants={iconVariants} whileHover="hover">
            <FaTimes onClick={() => deleteMeal(meal.idMeal, meal.strMeal)} />
          </Icon>
        </Info>
        <ImageConatiner>
          <Card.Img variant="top" src={meal.strMealThumb} />
        </ImageConatiner>
        <Card.Body style={{ padding: "0" }}>
          <Card.Title style={{ height: "3rem", padding: "1rem 0" }}>
            {meal.strMeal}
          </Card.Title>
          <Card.Text
            style={{ color: "red", fontWeight: "bolder", fontSize: "larger" }}
          >
            $ {meal.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Conatiner>
  );
};

export default Meal;
