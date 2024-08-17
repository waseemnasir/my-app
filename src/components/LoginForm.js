import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  useTheme,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import diverSCInnova from "../assets/images/diverSCInnova.svg";
import Logo from "../assets/images/Logo.svg";
import passwordIMG from "../assets/images/passwordIMG.svg"
import { makeStyles } from "@mui/styles";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const useStyles = makeStyles((theme) => ({
  inputPadding: {
    "& .MuiOutlinedInput-input": {
      padding: "12px 16px",
    },
  },
}));
const LoginForm = (props) => {
  const { currentIndex, setCurrentIndex } = props;
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCompany, setIsCompany] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main
  const secondaryColor = theme.palette.secondary.main
  const secondaryDark = theme.palette.secondary.dark
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password, rememberMe }));
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <Box style={{ height: "976px" }}>
      <Box sx={{ marginLeft: "60px", width: 480 }}>
        <img src={Logo} alt="Logo" style={{ width: "73px", height: "44px" }} />
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: '480px',
          ml: "60px",
          pr: "100px",
          pt: "169px",
        }}
      >
        <Typography
          style={{ fontSize: "32px", fontFamily: "Outfit", fontWeight: 600,color:primaryColor }}
        >
          Welcome to AIA
        </Typography>
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: 400,
            color:secondaryColor,
            marginTop: "8px",
            fontFamily: "Outfit",
            marginBottom: "32px",
          }}
        >
          Please enter your login credentials to access your account
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "335px",
            height: "56px",
            borderRadius: "8px",
            padding: "8px",
            gap: "12px",
            bgcolor: "rgba(10, 10, 10, 0.05)",
            mb: 4,
          }}
        >
          <Button
            variant="contained"
            onClick={() => setIsCompany(true)}
            sx={{
              width: "117px",
              height: "40px",
              borderRadius: "8px",
              padding: "10px 20px",
              typography: "body1",
              color: isCompany ? "#FFFFFF" : secondaryColor,
              bgcolor: isCompany ? "#7F5FFF" : "transparent",
              fontFamily: "Outfit",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "20px",
              boxShadow: "none",
              "&:hover": {
                bgcolor: isCompany ? "#6e4fe2" : "transparent",
              },
            }}
          >
            Company
          </Button>
          <Button
            variant="contained"
            onClick={() => setIsCompany(false)}
            sx={{
              width: "190px",
              height: "40px",
              borderRadius: "8px",
              padding: "10px 20px",
              typography: "body1",
              color: !isCompany ? "#FFFFFF" : "rgba(10, 10, 10, 0.4)",
              bgcolor: !isCompany ? "#7F5FFF" : "transparent",
              fontFamily: "Outfit",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "20px",
              boxShadow:'none',
              "&:hover": {
                bgcolor: !isCompany ? "#6e4fe2" : "transparent",
              },
            }}
          >
            Educator
          </Button>
        </Box>
        <Typography sx={{ mb: 1,color:primaryColor }}>Email</Typography>

        <TextField
          className={classes.inputPadding}
          label="Enter email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: "20px" }}
        />
        <Typography sx={{ mb: 1,color:primaryColor }}>Password</Typography>
        <TextField
          className={classes.inputPadding}
          label="Enter password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: "20px" }}
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
            )
          }}
        />
        <Box display={"flex"} justifyContent={"space-between"}>
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                color="primary"
              />
            }
            label="Remember Me"
            sx={{ alignSelf: "flex-start",color:primaryColor }}
          />

          <Link
            component="button"
            variant="body2"
            onClick={() => alert("Forgot Password?")}
            sx={{
              alignSelf: "flex-end",
              mb: 2,
              color: "#0C0129",
              fontFamily: "Outfit",
              textDecorationColor: "#0C0129",
            }}
          >
            Forgot Password?
          </Link>
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "rgba(96, 58, 248, 0.2) !important",
            color: secondaryColor,
            fontFamily: "Outfit",
            mt: 3,
            mb: 3,
            height: "48px",
          }}
          fullWidth
        >
          Log In
        </Button>

        <Box sx={{ fontFamily: "Outfit", textAlign: "center" }}>
          <Typography variant="body2" sx={{color:secondaryColor ,fontWeight:500}}>
            Don’t have an account?{" "}
            <Link href="#" onClick={() => alert("Sign Up")} sx={{color:secondaryDark}}>
              Sign Up
            </Link>
          </Typography>
        </Box>
        <Box sx={{ mt: "112px", mr: "auto" }}>
          <img
            src={diverSCInnova}
            alt="Illustrative description"
            style={{ borderRadius: 10 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
