import React from "react";
import Logo from "../assets/images/Logo.svg";
import flagImg from "../assets/images/flagImg.svg";
import { useSignUpForm } from "../hooks/useSignUpForm";
import useThemeColors from "../hooks/useTheme";
import {
  StyledMainContainer,
  StyledLogoContainer,
  StyledFormContainer,
  StyledToggleButtonContainer,
  StyledAccountTextContainer,
  CompanyButton,
  EducatorButton,
  LoginButton,
  CredentialText,
  WelcomeText,
  LabelText,
  LogoImage,
  SignupLink,
  CustomTextField,
  PromptText,
  CustomTextFieldWithAdornment,
  AdornmentImage,
  CustomInputAdornment,
} from "../styles/formStyles";

const SignUpForm = () => {
  const { primaryColor, secondaryColor, secondaryDarkColor } = useThemeColors();
  const { formData, handleInput, handleSubmit, isCompany, setIsCompany } =
    useSignUpForm();

  return (
    <StyledMainContainer>
      <StyledLogoContainer>
        <LogoImage src={Logo} alt="Logo" />
      </StyledLogoContainer>
      <StyledFormContainer
        component="form"
        onSubmit={handleSubmit}
        page="signUp"
      >
        <WelcomeText primaryColor={primaryColor}>
          Create Your Account
        </WelcomeText>
        <CredentialText secondaryColor={secondaryColor}>
          Please enter the following information in order to sign up
        </CredentialText>

        <StyledToggleButtonContainer>
          <CompanyButton
            variant="contained"
            onClick={() => setIsCompany(true)}
            isCompany={isCompany}
            secondaryColor={secondaryColor}
          >
            Company
          </CompanyButton>
          <EducatorButton
            variant="contained"
            onClick={() => setIsCompany(false)}
            isCompany={isCompany}
            secondaryColor={secondaryColor}
          >
            Educator
          </EducatorButton>
        </StyledToggleButtonContainer>
        <LabelText primaryColor={primaryColor}>Full Name</LabelText>

        <CustomTextField
          label="Enter full Name"
          variant="outlined"
          fullWidth
          value={formData.fullName}
          onChange={handleInput("fullName")}
        />
        <LabelText primaryColor={primaryColor}>Email</LabelText>

        <CustomTextField
          label="Enter email"
          type="email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleInput("email")}
        />
        <LabelText primaryColor={primaryColor}>Password</LabelText>
        <CustomTextField
          label="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          value={formData.password}
          onChange={handleInput("password")}
        />
        <LabelText primaryColor={primaryColor}>Confirm Password</LabelText>
        <CustomTextField
          label="Enter confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          value={formData.confirmPassword}
          onChange={handleInput("confirmPassword")}
        />
        <LabelText primaryColor={primaryColor}>Profession</LabelText>
        <CustomTextField
          label="Enter profession"
          variant="outlined"
          fullWidth
          value={formData.profession}
          onChange={handleInput("profession")}
        />
        <LabelText primaryColor={primaryColor}>Telephone</LabelText>
        <CustomTextFieldWithAdornment
          placeholder="(555 000-0000)"
          type="tel"
          variant="outlined"
          fullWidth
          value={formData.telephone}
          onChange={handleInput("telephone")}
          InputProps={{
            startAdornment: (
              <CustomInputAdornment position="start">
                <AdornmentImage src={flagImg} alt="Logo"/>
              </CustomInputAdornment>
            ),
          }}
        />
        <LoginButton
          type="submit"
          variant="contained"
          secondaryColor={secondaryColor}
        >
          Continue
        </LoginButton>

        <StyledAccountTextContainer>
          <PromptText variant="body2" color={secondaryColor}>
            Already have an account?{" "}
            <SignupLink
              href="#"
              onClick={() => alert("Log In")}
              secondaryDarkColor={secondaryDarkColor}
            >
              Log In
            </SignupLink>
          </PromptText>
        </StyledAccountTextContainer>
      </StyledFormContainer>
    </StyledMainContainer>
  );
};

export default SignUpForm;
