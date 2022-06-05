import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import Logo from "../assets/mealschefLogo.png";
import { FaShoppingCart, FaWallet } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import { NavLink } from "react-router-dom";
import { MealContext } from "./MealContext";
import { motion } from "framer-motion";

const NavContainer = styled.div`
  a {
    text-decoration: none !important;
    color: rgb(255, 255, 255) !important;
    margin-right: 2rem;
    padding: 1rem;
    font-size: x-large;
  }

  a:hover {
    color: rgb(255, 227, 17) !important;
  }

  #brand {
    color: #ffca2c !important;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
  }

  .icon {
    color: rgb(255, 255, 255);
  }
`;

const CardContainer = styled.div`
  width: 46rem;
  display: flex;
  justify-content: flex-end;

  .icon {
    border: 2px solid #fff;
    border-radius: 1rem;
    padding: 0.5rem;
    font-size: 3rem;
  }

  .badgeStyle {
    transform: translate(-1rem, -1rem);
    height: max-content;
  }
`;

const NavBar = () => {
  //Consume Context
  const { totalOrders, totalPrice } = useContext(MealContext);

  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <NavContainer
      as={motion.div}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" id="brand">
              <img src={Logo} width="60px" height="60px" alt="logo" />
              Meals Chef
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/newMeal" style={navLinkStyle}>
                Add New
              </Nav.Link>
              <Nav.Link>
                <CardContainer>
                  <FaShoppingCart className="icon" />
                  <Badge pill bg="info" className="badgeStyle">
                    {totalOrders}
                  </Badge>

                  <FaWallet className="icon" />
                  <Badge pill bg="info" className="badgeStyle">
                    $ {totalPrice}
                  </Badge>
                </CardContainer>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavContainer>
  );
};

export default NavBar;
