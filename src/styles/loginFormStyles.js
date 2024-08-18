import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Button, FormControlLabel, Link, TextField, Typography } from "@mui/material";

export const StyledMainContainer = styled(Box)(({ theme }) => ({
  height: "976px",
}));

export const StyledLogoContainer = styled(Box)(({ theme }) => ({
  marginLeft: "60px",
  width: "480px",
}));

export const StyledFormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "480px",
  marginLeft: "60px",
  paddingRight: "100px",
  paddingTop: "169px",
}));

export const StyledToggleButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "335px",
  height: "56px",
  borderRadius: "8px",
  padding: "8px",
  gap: "12px",
  backgroundColor: "rgba(10, 10, 10, 0.05)",
  marginBottom: 4,
}));

export const StyledBottomImageContainer = styled(Box)(({ theme }) => ({
  marginTop: "112px",
  marginRight: "auto",
}));
export const StyledAccountTextContainer = styled(Box)(({ theme }) => ({
  fontFamily: "Outfit",
  textAlign: "center",
}));

export const StyledCredentialsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));


export const CompanyButton = styled(Button)(({ isCompany,secondaryColor }) => ({
  width: "117px",
  height: "40px",
  borderRadius: "8px",
  padding: "10px 20px",
  typography: "body1",
  color: isCompany ? "#FFFFFF" :secondaryColor,
  backgroundColor: isCompany ? "#7F5FFF" : "transparent",
  fontFamily: "Outfit",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "20px",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: isCompany ? "#6e4fe2" : "transparent",
  },
}));

export const EducatorButton = styled(Button)(({ isCompany,secondaryColor }) => ({
  width: "190px",
  height: "40px",
  borderRadius: "8px",
  padding: "10px 20px",
  typography: "body1",
  color: !isCompany ? "#FFFFFF" : secondaryColor,
  backgroundColor: !isCompany ? "#7F5FFF" : "transparent",
  fontFamily: "Outfit",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "20px",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: !isCompany ? "#6e4fe2" : "transparent",
  },
}));
export const LoginButton = styled(Button)(({secondaryColor}) => ({
  backgroundColor: "rgba(96, 58, 248, 0.2) !important",
  color: secondaryColor,
  fontFamily: "Outfit",
  marginTop: "24px",
  marginBottom: "24px",
  height: "48px",
  width: "100%",
}));

export const WelcomeText = styled(Typography)(({ theme, primaryColor }) => ({
  fontSize: "32px",
  fontFamily: "Outfit",
  fontWeight: 600,
  color: primaryColor,
}));

export const CredentialText = styled(Typography)(
  ({ theme, secondaryColor }) => ({
    fontSize: "16px",
    fontWeight: 400,
    color: secondaryColor,
    marginTop: "8px",
    fontFamily: "Outfit",
    marginBottom: "32px",
  })
);

export const LabelText = styled(Typography)(({ primaryColor }) => ({
  marginBottom: "8px",
  color: primaryColor,
}));

export const RememberMeLabel = styled(FormControlLabel)(({ theme, primaryColor }) => ({
  alignSelf: 'flex-start',
  color: primaryColor,
}));

export const ForgotPasswordLink = styled(Link)(({ theme }) => ({
  alignSelf: 'flex-end',
  marginBottom: '16px',
  color: "#0C0129",
  fontFamily: "Outfit",
  textDecorationColor: "#0C0129",
}));

export const SignupLink = styled(Link)(({ theme, secondaryDarkColor }) => ({
  color: secondaryDarkColor,
}));

export const LogoImage = styled('img')(({ theme }) => ({
  width: "73px",
  height: "44px"
}));

export const DecorativeImage = styled('img')(({ theme }) => ({
  borderRadius: 10,
}));
export const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-input': {
    padding: '12px 16px',
  },
  marginBottom: '20px'
}));
export const PromptText = styled(Typography)(({ theme, secondaryColor }) => ({
  color: secondaryColor,
  fontWeight: 500,
}));
