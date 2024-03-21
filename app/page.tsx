"use client";
import { useContext, useEffect } from "react";
import { AppContext } from "@/store/app-context";

import CardsContainer from "@/components/CardsContainer";
import CharacterCard from "@/components/CharacterCard";
import Feedback from "@/components/Feedback";
import Loader from "@/components/Loader";

export default function Home() {
  const { charactersList, isLoading } = useContext(AppContext);
  return (
    <main>
      <Feedback />
      {isLoading && <Loader />}
      <CardsContainer>
        {charactersList?.map((character) => {
          return (
            <CharacterCard
              key={character.id}
              CharacterData={character}
              allowDetailAccess={true}
            />
          );
        })}
      </CardsContainer>
    </main>
  );
}
