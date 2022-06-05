import { FaPlusSquare, FaTrash } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;

export const Left = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  width: 30rem;
  height: 108vh;
  text-align: left;
  padding: 1rem;

  h2 {
    color: #dd8533;
    text-transform: uppercase;
  }

  label {
    font-weight: bold;
    color: #56514d;
  }

  input {
    color: #6d6d6d;
  }

  input:focus {
    color: black;
    border-color: #dd8533;
    outline: none;
    box-shadow: 0 0 10px #ed9e17;
  }

  span {
    color: red;
    width: 1rem;
    font-size: small;
  }

  .multipleControlsContainer {
    background-color: #f0f2e9;
    height: 11rem;
    margin-bottom: 0.5rem;
    border-right: 2px solid rgb(215, 190, 0);
    overflow-y: scroll;
  }
`;

export const StyledFaPlusSquare = styled(FaPlusSquare)`
color: #20c966;
  margin: 0 0.5rem;
  cursor: pointer;
  opacity: 0.8;
  &:hover{
    opacity: 1;
  }
`;

export const StyledFaTrash = styled(FaTrash)`
  color: #ef5812;
  margin: 0 0.5rem;
  cursor: pointer;
  opacity: 0.8;
  &:hover{
    opacity: 1;
  }
`

export const List = styled.ul`
  padding: 0.2rem;
  height: 8.3rem;
  width: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 0.5rem;
  width: 100%;
`;



export const Center = styled.div`
  width: 30rem;
  height: 108vh;
  padding: 1rem;
  background-color: #fff;
  box-shadow: rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.06) 0px 1px 2px 0px;

  h4{
    color: #948e8a;
    padding-left: 1.1rem;
    margin-bottom: 1.5rem;
  }

  ul{
    height: 93vh;
    padding: 0;
    list-style-type: circle;
    overflow-y: scroll;
  }

  li{
    width: 23rem;
    border-bottom: 1px solid #ffa143;
    margin-bottom: 1rem;
    margin-left: 2rem;
  }

`;

export const Right = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  padding: 1rem;
  width: 30rem;
  height: 108vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  Button {
    width: 100%;
    height: 3.2rem;
  }
`;

export const ThumbImageContainer = styled.div`
  width: 100%;
  height: 15rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  padding: 0;
  width: 100%;
  height: 21rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #fff;
  margin-bottom: 2rem;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 15rem;

  img{
    width: 100%;
    height: 100%;
  }
`
