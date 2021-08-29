import {
  MainContainer,
  ContentContainer,
  MainInfoContainer,
  MainInfo,
  MainNavButtonsContainer,
  MainNavButtons,
  MainInfoImage,
  MainInfoImageContainer,
  ScrollDownButton,
} from "../../styles/mainpageStyle";

import { IoIosArrowDown } from "react-icons/io";

import MinhaFoto from "./images/MyFoto2.jpeg";

const MainPage = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <MainInfoContainer>
          <MainInfoImageContainer>
            <MainInfoImage alt="Eliabe" src={MinhaFoto}></MainInfoImage>
          </MainInfoImageContainer>
          <MainInfo>Eliabe on next</MainInfo>
          <MainNavButtonsContainer>
            <MainNavButtons>Documentacao</MainNavButtons>
            <MainNavButtons>Blog</MainNavButtons>
            <MainNavButtons>Portfolio</MainNavButtons>
          </MainNavButtonsContainer>
        </MainInfoContainer>
        <ScrollDownButton>
          <IoIosArrowDown></IoIosArrowDown>
        </ScrollDownButton>
      </ContentContainer>
    </MainContainer>
  );
};

export default MainPage;
