import { useTheme } from "@mui/material";

const useThemeColors = () => {
  const theme = useTheme();
  const colors = {
    primaryColor: theme.palette.primary.main,
    secondaryColor: theme.palette.secondary.main,
    secondaryDarkColor: theme.palette.secondary.dark,
  };

  return colors;
};

export default useThemeColors;
