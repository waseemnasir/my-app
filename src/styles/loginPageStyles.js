import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const RootContainer = styled(Box)(({ theme, isTabletOrMobile }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: isTabletOrMobile ? 'column' : 'row',
}));

export const FormContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export const BannerContainer = styled(Box)(({ theme }) => ({
  color: 'white',
  marginTop: theme.spacing(3),
  width: '100%',
}));
