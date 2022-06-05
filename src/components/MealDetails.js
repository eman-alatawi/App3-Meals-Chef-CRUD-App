import React, { useContext } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { MealContext } from "./MealContext";

const Conatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  height: 83vh;
  padding: 2rem;
`;

const Wrapper = styled.div`
  padding: 0;
  width: 45vw;
  height: 30rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #fff;

  h5 {
    display: grid;
    place-items: center;
    height: inherit;
    color: gray;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 30rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const IgredientsConatiner = styled.div`
  height: 25rem;
  overflow-y: scroll;
  padding: 0 1rem;
  margin-bottom: 1rem;
  line-height: 2.5;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: #e6e4df;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #debb64;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

const MealDetails = () => {
  //Consume Context
  const { handleOrderClick } = useContext(MealContext);
  const location = useLocation();
  // console.log(location);

  const { meal } = location.state;
  console.log(meal);

  return (
    <Conatiner>
      <Wrapper>
        {meal.mealPictures.length >= 1 ? (
          <Carousel
            showIndicators={false}
            autoPlay
            infiniteLoop
            className="carousel"
          >
            {meal.mealPictures &&
              meal.mealPictures.map((singleMealPic, i) => (
                <ImageContainer key={i}>
                  <img src={singleMealPic.mealPicture} />
                </ImageContainer>
              ))}
          </Carousel>
        ) : (
          <h5>No Pictures Provided for this meal</h5>
        )}
      </Wrapper>
      <Wrapper>
        <div style={{ padding: "0 1rem" }}>
          <h3>Ingredients</h3>
          <h6 style={{ color: "gray" }}>{meal.strMeal}</h6>
        </div>
        <IgredientsConatiner>
          <ul>
            {meal.ingredients &&
              meal.ingredients.map((singleIngredient, i) => (
                <li key={i}>{singleIngredient.ingredient}</li>
              ))}
          </ul>
        </IgredientsConatiner>
        <Button
          variant="warning"
          style={{
            width: "100%",
            height: "3.2rem",
            fontWeight: "bolder",
            marginTop: "1rem",
          }}
          onClick={() => handleOrderClick(meal.price)}
        >
          Order Now $ {meal.price}
        </Button>
      </Wrapper>
    </Conatiner>
  );
};

export default MealDetails;
