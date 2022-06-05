import React, { useContext, useId } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  Container,
  Left,
  Center,
  Right,
  ThumbImageContainer,
  List,
  ListItem,
  StyledFaPlusSquare,
  StyledFaTrash,
  Wrapper,
  ImageContainer,
} from "./style/Forms.styled";
import { useForm, useFieldArray } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
import DefaultMealImg from "../assets/defaultMealImg.jpg";
import { Carousel } from "react-responsive-carousel";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { MealContext } from "./MealContext";

const NewMeal = () => {
  //Consume Context
  const { addNewMeal } = useContext(MealContext);

  const id = useId();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      mealPictures: [],
      ingredients: [{ ingredient: "ingredient 1" }],
    },
  });

  const {
    fields: mealPicturesFields,
    append: mealPicturesAppend,
    remove: mealPicturesRemove,
  } = useFieldArray({
    control,
    name: "mealPictures",
  });

  const {
    fields: ingredientsFields,
    append: ingredientsAppend,
    remove: ingredientsRemove,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  const onSubmit = (data) => {
    let newMeal = {
      idMeal: id,
      isNew: true,
      ...data,
    };

    addNewMeal(newMeal);
    Swal.fire("Meal Added", "Successfull", "success");
    navigate("/", { replace: true });
    // console.log(data);
    // console.log(newMeal);
  };

  const imgThumb = watch("strMealThumb")
    ? watch("strMealThumb")
    : DefaultMealImg;

  const mealPics = watch("mealPictures");

  const ingredients = watch("ingredients");

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Left>
            <h2 className="mb-3 text-left">Add New Meal</h2>
            <Form.Group className="mb-3" controlId="mealName">
              <Form.Label>Meal Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Meal Name"
                {...register("strMeal", {
                  required: "is required",
                })}
              />
              <span>{errors.strMeal?.message}</span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Meal Price"
                {...register("price", {
                  required: "is required",
                  min: {
                    value: 1,
                    message: "minmum price is $1",
                  },
                })}
              />
              <span>{errors.price?.message}</span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="mealThumb">
              <Form.Label>Meal Thumb</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter Meal Picture Thumb"
                {...register("strMealThumb", {
                  required: "is required",
                  pattern: {
                    value: /(https?:\/\/.*\.(?:png|jpg|gif|jpeg))/,
                    message: "Supported image urls are (jpg | png | gif |jpeg)",
                  },
                })}
              />
              <span>{errors.strMealThumb?.message}</span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="mealPicture">
              <Form.Label>Meal Picture(s)</Form.Label>
              <div className="multipleControlsContainer">
                <List>
                  {mealPicturesFields.map((item, index) => {
                    return (
                      <ListItem key={item.id}>
                        <Form.Control
                          type="url"
                          placeholder="New Picture"
                          {...register(`mealPictures.${index}.mealPicture`, {
                            required: true,
                          })}
                        />
                        <StyledFaTrash
                          onClick={() => mealPicturesRemove(index)}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </div>

              <StyledFaPlusSquare
                onClick={() => mealPicturesAppend({ mealPicture: "" })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mealIngredient">
              <Form.Label>Meal Ingredient(s)</Form.Label>
              <div className="multipleControlsContainer">
                <List>
                  {ingredientsFields.map((item, index) => {
                    return (
                      <ListItem key={item.id}>
                        <Form.Control
                          type="text"
                          placeholder="New ingredient"
                          {...register(`ingredients.${index}.ingredient`, {
                            required: true,
                          })}
                        />
                        <StyledFaTrash
                          onClick={() => ingredientsRemove(index)}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </div>

              <StyledFaPlusSquare
                onClick={() => ingredientsAppend({ ingredient: "" })}
              />
            </Form.Group>
          </Left>
          <Center>
            <h4>Ingredients (Preview)</h4>
            {ingredients.length >= 1 && (
              <ul>
                {ingredients.map((singleIngredient, index) => (
                  <li key={index}>{singleIngredient.ingredient}</li>
                ))}
              </ul>
            )}
          </Center>
          <Right>
            <ThumbImageContainer>
              <img src={imgThumb} alt="" />
            </ThumbImageContainer>
            {mealPics.length >= 1 && (
              <Wrapper>
                <Carousel
                  showIndicators={false}
                  showArrows={false}
                  autoPlay
                  infiniteLoop
                  className="carousel"
                >
                  {mealPics.map((singleMealPic, index) => (
                    <ImageContainer key={index}>
                      <img src={singleMealPic.mealPicture} />
                    </ImageContainer>
                  ))}
                </Carousel>
              </Wrapper>
            )}
            <Button
              variant="primary"
              type="submit"
              style={{ backgroundColor: "#53CBF0", border: "none" }}
            >
              ADD
            </Button>
            <Button
              variant="outline-secondary"
              className="mt-3"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </Right>
        </Container>
      </Form>
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default NewMeal;
