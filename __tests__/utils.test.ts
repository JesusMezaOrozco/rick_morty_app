import { Character, Order } from "@/types";
import { describe, expect, it } from "vitest";
import { getOrderedCharacters } from "@/utils";
import Characters from "@/__tests__/mocks/characters.json";

describe("getOrderedCharacters", () => {
  it("should return an ascend character list order", () => {
    const order: Order = "ASC";
    const expectedCharacterNamesOrdered = Characters.map(
      (character) => character.name,
    ).sort();
    const resultsNames = getOrderedCharacters(
      JSON.parse(JSON.stringify(Characters)),
      order,
    ).map((character) => character.name);
    expect(resultsNames).toEqual(expectedCharacterNamesOrdered);
  });
  it("should return an descend character list order", () => {
    const order: Order = "DESC";
    const expectedCharacterNamesOrdered = Characters.map(
      (character) => character.name,
    )
      .sort()
      .reverse();
    const resultsNames = getOrderedCharacters(
      JSON.parse(JSON.stringify(Characters)),
      order,
    ).map((character) => character.name);
    expect(resultsNames).toEqual(expectedCharacterNamesOrdered);
  });
});
