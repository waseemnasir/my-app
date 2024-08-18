import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import ErrorBoundary from "../components/ErrorBoundary";
import Banner from "../components/Banner";
import { RootContainer, FormContainer, BannerContainer } from "../styles/loginPageStyles";

const LoginPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 960px)" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const components = [
    <LoginForm currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />,
    <SignUpForm />
  ];

  const renderComponent = () => components[currentIndex];

  return (
    <>
      <RootContainer isTabletOrMobile={isTabletOrMobile}>
        <FormContainer>
          <ErrorBoundary>
            {renderComponent()}
          </ErrorBoundary>
        </FormContainer>
        <BannerContainer>
          <Banner />
        </BannerContainer>
      </RootContainer>
    </>
  );
};

export default LoginPage;
