"use client";
import { Box, Typography, styled } from "@mui/material";

const MainContainer = styled(Box)({
  backgroundColor: "black",
  width: "100%",
  position: "fixed",
  height: 20,
  bottom: 0,
  color: "white",
  fontSize: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function Footer() {
  return (
    <MainContainer>
      <Typography variant="inherit">Developed by Jesus Meza 2024</Typography>
    </MainContainer>
  );
}
