import React, { useContext, useEffect } from "react";
import MealsList from "./MealsList";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MealDetails from "./MealDetails";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import NewMeal from "./NewMeal";
import EditMeal from "./EditMeal";
import { MealContext } from "./MealContext";
import Swal from "sweetalert2";

const Home = () => {
  const { totalOrders } = useContext(MealContext);

  useEffect(() => {
    if (totalOrders >= 1) {
      Swal.fire("Thank you for Placing the Order", "", "success");
    }
  }, [totalOrders]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MealsList />} />
        <Route path="/mealDetails/:mealTitle" element={<MealDetails />} />
        <Route path="/newMeal" element={<NewMeal />} />
        <Route path="/editMeal/:mealTitle" element={<EditMeal />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Home;
