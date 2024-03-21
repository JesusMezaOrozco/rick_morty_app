"use client";
import React, { useContext } from "react";
import { AppContext } from "@/store/app-context";
import { Character } from "@/types";
import { Box, Grid, Typography } from "@mui/material";

import CharacterCard from "@/components/CharacterCard";

import Link from "next/link";

export default function Character({
  params,
}: {
  params: { idCharacter: string };
}) {
  const { getCharacterById, setCharacterLikeFavorite } = useContext(AppContext);
  const characterData = getCharacterById(Number(params.idCharacter));
  if (characterData)
    return (
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        sx={{ height: "100vh" }}
      >
        <Grid item>
          <CharacterCard
            CharacterData={characterData}
            allowDetailAccess={false}
          />
        </Grid>
        <Grid item display="flex" flexDirection="column" gap={2}>
          <Box
            className="button-action"
            onClick={() => setCharacterLikeFavorite(Number(params.idCharacter))}
          >
            <Typography>
              {characterData.isFavorite ? "Remove from " : "Add To "}Favorites
            </Typography>
          </Box>
          <Link href={`/`} className="button-action">
            Back
          </Link>
        </Grid>
      </Grid>
    );
}
