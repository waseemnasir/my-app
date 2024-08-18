import { styled } from '@mui/system';
import { Button, TextField, Box, Typography, Link, Checkbox, FormControlLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  inputPadding: {
    '& .MuiOutlinedInput-input': {
      padding: '12px 16px',
    },
  },
}));

export const LogoBox = styled(Box)({
  marginLeft: '60px',
  width: '480px',
});

export const FormBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '480px',
  marginLeft: '60px',
  paddingRight: '100px',
  paddingTop: '169px',
});

export const StyledTypography = styled(Typography)(({ theme, tyColor }) => ({
  fontSize: tyColor === 'primary' ? '32px' : '16px',
  fontWeight: tyColor === 'primary' ? 600 : 400,
  color: theme.primaryColor,
  fontFamily: 'Outfit',
  marginTop: tyColor === 'primary' ? '0px' : '8px',
  marginBottom: '32px',
}));

export const ButtonGroupBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '335px',
  height: '56px',
  borderRadius: '8px',
  padding: '8px',
  gap: '12px',
  backgroundColor: 'rgba(10, 10, 10, 0.05)',
  marginBottom: 4,
});

export const StyledButton = styled(Button)(({ theme, active }) => ({
  width: '117px',
  height: '40px',
  borderRadius: '8px',
  padding: '10px 20px',
  typography: 'body1',
  color: active ? '#FFFFFF' : theme.secondaryColor,
  backgroundColor: active ? '#7F5FFF' : 'transparent',
  fontFamily: 'Outfit',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: active ? '#6e4fe2' : 'transparent',
  },
}));

export const FlexBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const StyledLink = styled(Link)({
  alignSelf: 'flex-end',
  marginBottom: 2,
  color: '#0C0129',
  fontFamily: 'Outfit',
  textDecorationColor: '#0C0129',
});

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  alignSelf: 'flex-start',
  color: theme.primaryColor,
}));

export const BottomBox = styled(Box)({
  marginTop: '112px',
  marginRight: 'auto',
});
