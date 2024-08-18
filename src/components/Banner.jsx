import React from "react";
import {
  BannerContainer,
  SideIcon,
  ContentBox,
  MainText,
  SubText,
  BannerImage,
  IconContainer,
  ImageContainer
} from "../styles/bannerStyles";
import Side from "../assets/images/Side.svg";
import bannerImage from "../assets/images/bannerImage.png";
import { Box } from "@mui/material";

const Banner = () => {
  return (
    <BannerContainer>
      <IconContainer>
        <SideIcon src={Side} alt="Icon" />
      </IconContainer>

      <ContentBox>
        <Box>
          <MainText>
            Employ data-driven methodologies to guide hiring determinations.
          </MainText>
        </Box>
        <Box>
          <SubText>
            Accessible Neuropsychological Assessment is the first assessment
            with accessibility for people with sensory, physical, or
            intellectual disabilities!
          </SubText>
        </Box>
      </ContentBox>

      <ImageContainer>
        <BannerImage src={bannerImage} alt="Illustrative description" />
      </ImageContainer>
    </BannerContainer>
  );
};

export default Banner;
