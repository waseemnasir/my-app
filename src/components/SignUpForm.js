import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography, Link, InputAdornment, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Logo from "../assets/images/Logo.svg";
import flagImg from "../assets/images/flagImg.svg";
import { updateFormData } from "../features/auth/signUpSlice";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  inputPadding: {
    "& .MuiOutlinedInput-input": {
      padding: "12px 16px",
    },
  },
}));

const SignUpForm = () => {
  const classes = useStyles();
  const [isCompany, setIsCompany] = useState(true);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profession: "",
    telephone: "",
  });
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main
  const secondaryColor = theme.palette.secondary.main
  const secondaryDark = theme.palette.secondary.dark

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInput = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    dispatch(updateFormData(formData));
  };

  return (
    <Box
      sx={{
        height: "976px",
      }}
    >
      <Box sx={{ marginLeft: "60px", width: 480 }}>
        <img src={Logo} alt="Logo" style={{ width: "73px", height: "44px" }} />
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 480,
          ml: "60px",
          mr: "100px",
          pt: "24px",
        }}
      >
        <Typography
          style={{ fontSize: "32px", fontFamily: "Outfit", fontWeight: 600 }}
        >
          Create Your Account
        </Typography>
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#0A0A0A66",
            marginTop: "8px",
            fontFamily: "Outfit",
            marginBottom: "32px",
          }}
        >
          Please enter the following information in order to sign up
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "335px",
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
              color: !isCompany ? "#FFFFFF" : secondaryColor,
              bgcolor: !isCompany ? "#7F5FFF" : "transparent",
              fontFamily: "Outfit",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "20px",
              boxShadow: "none",
              "&:hover": {
                bgcolor: !isCompany ? "#6e4fe2" : "transparent",
              },
            }}
          >
            Educator
          </Button>
        </Box>
        <Typography sx={{ mb: 1,color:primaryColor }}>Full Name</Typography>

        <TextField
          className={classes.inputPadding}
          label="Enter full Name"
          variant="outlined"
          fullWidth
          value={formData.fullName}
          onChange={handleInput("fullName")}
          sx={{ mb: "20px" }}
        />
        <Typography sx={{ mb: 1,color:primaryColor }}>Email</Typography>

        <TextField
          className={classes.inputPadding}
          label="Enter email"
          type="email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleInput("email")}
          sx={{ mb: "20px" }}
        />
        <Typography sx={{ mb: 1,color:primaryColor }}>Password</Typography>
        <TextField
          className={classes.inputPadding}
          label="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          value={formData.password}
          onChange={handleInput("password")}
          sx={{ mb: "20px" }}
        />
        <Typography sx={{ mb: 1,color:primaryColor }}>Confirm Password</Typography>
        <TextField
          className={classes.inputPadding}
          label="Enter confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          value={formData.confirmPassword}
          onChange={handleInput("confirmPassword")}
          sx={{ mb: "20px" }}
        />
        <Typography sx={{ mb: 1,color:primaryColor }}>Profession</Typography>
        <TextField
          className={classes.inputPadding}
          label="Enter profession"
          variant="outlined"
          fullWidth
          value={formData.profession}
          onChange={handleInput("profession")}
          sx={{ mb: "20px" }}
        />
        <Typography sx={{ mb: 1,color:primaryColor }}>Telephone</Typography>
        <TextField
          className={classes.inputPadding}
          placeholder="(555 000-0000)"
          type="tel"
          variant="outlined"
          fullWidth
          value={formData.telephone}
          onChange={handleInput("telephone")}
          InputProps={{
            sx: {
              paddingLeft: 0,  // Sets padding to zero
              '& .MuiOutlinedInput-input': {
                paddingLeft: 0  // Ensures padding is zero for the input element itself
              }
            },        
            startAdornment: (
              <InputAdornment position="start">
        <img src={flagImg} alt="Logo" style={{ width: "68px" }} />
              </InputAdornment>
            )
          }}
    
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "rgba(96, 58, 248, 0.2) !important",
            color: secondaryColor,
            fontFamily: "Outfit",
            mt: 3,
            mb: "20px",
            height: "48px",
          }}
          fullWidth
        >
          Continue
        </Button>

        <Box sx={{ fontFamily: "Outfit", textAlign: "center" }}>
          <Typography variant="body2" sx={{color:secondaryColor ,fontWeight:500}}>
            Already have an account?{" "}
            <Link href="#" onClick={() => alert("Log In")}sx={{color:secondaryDark}}>
              Log In
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm;
