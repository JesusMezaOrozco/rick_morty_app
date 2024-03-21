"use client";
import { Box, Typography, styled } from "@mui/material";

const MainContainer = styled(Box)({
  backgroundColor: "#e83375",
  width: "100%",
  position: "fixed",
  height: 40,
  top: 0,
  color: "white",
  zIndex: 50,
  fontSize: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "1px solid black",
});

export default function Header() {
  return (
    <MainContainer>
      <Typography variant="body2">Rick & Morty Characters</Typography>
    </MainContainer>
  );
}
