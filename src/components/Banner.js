import React from "react";
import { Box, Typography } from "@mui/material";
import Side from "../assets/images/Side.svg";
import bannerImage from "../assets/images/bannerImage.png";

const Banner = () => {
  return (
    <Box
      style={{
        maxWidth: "100%",
        minHeight: "972px",
        backgroundColor: "#0C0129",
        borderRadius: '24px',
        marginRight: "40px",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          src={Side}
          alt="Icon"
          style={{
            width: '40px',
            height: '40px',
            marginRight: "10px",
            marginTop: "18px",
          }}
        />
      </Box>

      <Box
        style={{
          textAlign: "center",
          width: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 600,
              mt: "112px",
              fontFamily: "Outfit",
              textAlign: "center",
            }}
          >
            Employ data-driven methodologies to guide hiring determinations.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              mt: "16px",
              mb: "74px",
              fontFamily: "Outfit",
              wordSpacing: "-1px",
            }}
          >
            Accessible Neuropsychological Assessment is the first assessment
            with accessibility for people with sensory, physical, or
            intellectual disabilities!
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: '16px' }}>
        <img
          src={bannerImage}
          alt="Illustrative description"
          style={{
            width: "605px",
            height: "403px",
            borderRadius: "24px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Banner;
