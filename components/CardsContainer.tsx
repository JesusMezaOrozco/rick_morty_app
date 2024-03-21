import React, { ReactNode } from "react";
import { Box, styled } from "@mui/material";

type Props = {
  children: ReactNode;
};

const MainContainer = styled(Box)({
  maxHeight: "calc(100vh - 40px)",
  position: "relative",
  top: 40,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 50,
  overflow: "auto",
  gap: 50,
  flexWrap: "wrap",
});

export default function CardsContainer({ children }: Props) {
  return <MainContainer>{children}</MainContainer>;
}
