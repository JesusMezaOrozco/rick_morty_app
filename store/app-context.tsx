import axios from "axios";
import { Character } from "@/types";
import { ReactNode, createContext, useEffect, useState } from "react";

export const AppContext = createContext({
  setCharacterList: (characters: Character[]) => {},
  setCharacterLikeFavorite: (idCharacter: number) => {},
  setIsLoading: (status: boolean) => {},
  charactersList: [] as Character[],
  isLoading: false,
  feedback: {
    message: "",
    type: "error",
    isOpen: false,
  },
  resetFeedback: () => {},
  getCharacterById: (id: number): Character | undefined => {
    return undefined;
  },
});

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [charactersList, setCharacterList] = useState<Character[]>([]);
  const [feedback, setFeedback] = useState<{
    message: string;
    isOpen: boolean;
    type: "success" | "error";
  }>({
    message: "",
    type: "error",
    isOpen: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const setCharacterLikeFavorite = (idCharacter: number) => {
    const newCharacterList = charactersList.map((character) => {
      if (character.id === idCharacter) {
        return {
          ...character,
          isFavorite: !character.isFavorite,
        };
      } else {
        return character;
      }
    });
    setCharacterList(newCharacterList);
  };
  const resetFeedback = () => {
    setFeedback((prev) => {
      return {
        ...prev,
        isOpen: false,
      };
    });
  };
  const getCharacterById = (id: number): Character | undefined => {
    return charactersList.find((character) => character.id === id);
  };
  const requester = (url: string, method: "get" | "post") => {
    setIsLoading(true);
    axios({
      method,
      url,
    })
      .then(({ data }) => {
        setFeedback({
          message: data.message,
          type: "success",
          isOpen: true,
        });
        setCharacterList(data.results);
      })
      .catch(({ response }) => {
        setFeedback({
          message: response.data.message,
          type: "error",
          isOpen: true,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    requester("/api/characters", "get");
  }, []);

  return (
    <AppContext.Provider
      value={{
        charactersList,
        setCharacterList,
        setCharacterLikeFavorite,
        isLoading,
        setIsLoading,
        feedback,
        resetFeedback,
        getCharacterById,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
