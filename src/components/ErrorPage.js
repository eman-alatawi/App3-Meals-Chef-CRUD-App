import React from "react";
import PageNotFound from "../assets/404.png";
import styled from "styled-components";

const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 15rem;
    margin-bottom: 1rem;
  }

  h2 {
    color: #56514d;
  }
`;
const ErrorPage = () => {
  return (
    <Container>
      <img src={PageNotFound} alt="404" />
      <h2>Page Not Found</h2>
    </Container>
  );
};

export default ErrorPage;
