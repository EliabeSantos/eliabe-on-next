import styled from "styled-components";
import Image from "next/image";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000814;

  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainInfoContainer = styled.div`
  width: 30rem;
  height: 30rem;
  background-color: #001d3d;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainInfo = styled.h2`
  font: 1rem;
  color: #ffd60a;
`;

export const MainNavButtonsContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
`;

export const MainNavButtons = styled.button`
  width: 8rem;
  height: 2rem;
  background-color: #003566;
  color: #ffd60a;

  border: 0;
  border-radius: 10px;
  transition: all 0.8s;
  :hover {
    background-color: #000814;
  }
`;

export const MainInfoImageContainer = styled.div`
  width: 10rem;
  height: 10rem;
  img {
    height: 10rem;
    width: 10rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const MainInfoImage = styled(Image)``;

export const ScrollDownButton = styled.button`
  width: 20rem;
  height: 4rem;
  border: none;
  background-color: #000814;
  margin: 10rem 0 0 0;
  color: #ffd60a;

  svg {
    font-size: 5rem;
    transition: 1s;
    :hover {
      font-size: 5.5rem;
    }
  }
`;
