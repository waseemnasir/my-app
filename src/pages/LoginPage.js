import React, { useState } from 'react';
import { Box } from '@mui/material';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import ErrorBoundary from '../components/ErrorBoundary';
import Banner from '../components/Banner';
import { useMediaQuery } from 'react-responsive';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: props => props.isTabletOrMobile ? 'column' : 'row'
  },
  formContainer: {
    marginTop: theme.spacing(3),
  },
  bannerContainer: {
    color: 'white',
    marginTop: theme.spacing(3),
    width:'100%'
    // flexGrow: 1
  }
}));

const LoginPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 960px)' });
  const classes = useStyles({ isTabletOrMobile });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const components = [
    <LoginForm currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />,
    <SignUpForm />,
  ];
  const renderComponent = () => {
    return components[currentIndex];
  };

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.formContainer}>
          <ErrorBoundary>{renderComponent()}</ErrorBoundary>
        </Box>
        <Box className={classes.bannerContainer}>
          <Banner />
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
