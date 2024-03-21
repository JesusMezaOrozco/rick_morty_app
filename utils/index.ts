import { Character, Order } from "@/types";

function compareAscByName(character1: Character, character2: Character) {
  return character1.name.localeCompare(character2.name);
}
function compareDescByName(character1: Character, character2: Character) {
  return character2.name.localeCompare(character1.name);
}

const getOrderedCharacters = (characterList: Character[], order: Order) => {
  if (characterList) {
    switch (order) {
      case "ASC":
        return characterList.sort(compareAscByName);
      case "DESC":
        return characterList.sort(compareDescByName);
    }
  }
  throw new Error("There is not characters!");
};

export { getOrderedCharacters };
