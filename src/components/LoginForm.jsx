import React from "react";
import {
  Checkbox,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  StyledMainContainer,
  StyledLogoContainer,
  StyledFormContainer,
  StyledToggleButtonContainer,
  StyledBottomImageContainer,
  StyledAccountTextContainer,
  StyledCredentialsContainer,
  CompanyButton,
  EducatorButton,
  LoginButton,
  CredentialText,
  WelcomeText,
  LabelText,
  ForgotPasswordLink,
  DecorativeImage,
  LogoImage,
  SignupLink,
  RememberMeLabel,
  CustomTextField,
  PromptText,
} from "../styles/formStyles";
import diverSCInnova from "../assets/images/diverSCInnova.svg";
import Logo from "../assets/images/Logo.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useLoginForm from "../hooks/useLoginForm";
import useThemeColors from "../hooks/useTheme";
const LoginForm = (props) => {
  const { currentIndex, setCurrentIndex } = props;
  const { primaryColor, secondaryColor, secondaryDarkColor } = useThemeColors();
  const {
    email,
    setEmail,
    password,
    setPassword,
    isCompany,
    setIsCompany,
    rememberMe,
    setRememberMe,
    showPassword,
    handleTogglePasswordVisibility,
    handleSubmit,
  } = useLoginForm({ currentIndex, setCurrentIndex });

  return (
    <StyledMainContainer>
      <StyledLogoContainer>
        <LogoImage src={Logo} alt="Logo" />
      </StyledLogoContainer>
      <StyledFormContainer component="form" onSubmit={(e) => handleSubmit(e)}>
        <WelcomeText primaryColor={primaryColor}>Welcome to AIA</WelcomeText>
        <CredentialText secondaryColor={secondaryColor}>
          Please enter your login credentials to access your account
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
        <LabelText primaryColor={primaryColor}>Email</LabelText>

        <CustomTextField
          label="Enter email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabelText primaryColor={primaryColor}>Password</LabelText>
        <CustomTextField
          label="Enter password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <StyledCredentialsContainer>
          <RememberMeLabel
            primaryColor={primaryColor}
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                color="primary"
              />
            }
            label="Remember Me"
          />

          <ForgotPasswordLink
            component="button"
            variant="body2"
            onClick={() => alert("Forgot Password?")}
          >
            Forgot Password?
          </ForgotPasswordLink>
        </StyledCredentialsContainer>
        <LoginButton
          type="submit"
          variant="contained"
          secondaryColor={secondaryColor}
        >
          Log In
        </LoginButton>

        <StyledAccountTextContainer>
          <PromptText variant="body2" color={secondaryColor}>
            Don’t have an account?{" "}
            <SignupLink
              href="#"
              onClick={() => alert("Sign Up")}
              secondaryDarkColor={secondaryDarkColor}
            >
              Sign Up
            </SignupLink>
          </PromptText>
        </StyledAccountTextContainer>
        <StyledBottomImageContainer>
          <DecorativeImage src={diverSCInnova} alt="Illustrative description" />
        </StyledBottomImageContainer>
      </StyledFormContainer>
    </StyledMainContainer>
  );
};

export default LoginForm;
