import React, { createContext, useState } from "react";
import Swal from "sweetalert2";
import { meals } from "../mealsData";

//1-Initializing Context
export const MealContext = createContext();

//2- Providing Context
export const MealProvider = (props) => {
  const [allMeals, setAllMeals] = useState(meals);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleOrderClick = (price) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + parseInt(price));
    setTotalOrders((prevTotalOrders) => prevTotalOrders + 1);
  };

  const addNewMeal = (newMeal) => {
    setAllMeals([newMeal, ...allMeals]);
  };

  const updateMeal = (updatedMeal) => {
    const filterdMeals = allMeals.filter(
      (meal) => meal.idMeal !== updatedMeal.idMeal
    );
    setAllMeals([updatedMeal, ...filterdMeals]);
  };

  const deleteMeal = (id, mealTitle) => {
    Swal.fire({
      title: "Want to Delete ?!!",
      text: mealTitle,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const filterdMeals = allMeals.filter((meal) => meal.idMeal !== id);
        setAllMeals(filterdMeals);

        Swal.fire("Deleted!", `${mealTitle} meal has been deleted`, "success");
      }
    });
  };

  return (
    <MealContext.Provider
      value={{
        allMeals,
        totalOrders,
        totalPrice,
        handleOrderClick,
        addNewMeal,
        updateMeal,
        deleteMeal,
      }}
    >
      {props.children}
    </MealContext.Provider>
  );
};
