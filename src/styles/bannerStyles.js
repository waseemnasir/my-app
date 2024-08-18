import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BannerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  minHeight: "972px",
  backgroundColor: "#0C0129",
  borderRadius: "24px",
  marginRight: "40px",
  color: "white",
}));

export const SideIcon = styled('img')({
  width: "40px",
  height: "40px",
  marginRight: "10px",
  marginTop: "18px",
});

export const ContentBox = styled(Box)({
  textAlign: "center",
  width: "500px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
});

export const MainText = styled(Typography)({
  fontSize: "28px",
  fontWeight: 600,
  marginTop: "112px",
  fontFamily: "Outfit",
  textAlign: "center",
});

export const SubText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  marginTop: "16px",
  marginBottom: "74px",
  fontFamily: "Outfit",
  wordSpacing: "-1px",
}));

export const BannerImage = styled('img')({
  width: "605px",
  height: "403px",
  borderRadius: "24px",
});

export const IconContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
});

export const ImageContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "16px",
});
