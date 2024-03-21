import axios, { AxiosResponse } from "axios";
import { NextResponse } from "next/server";
import { getOrderedCharacters } from "@/utils";
import { Character } from "@/types";

export async function GET() {
  try {
    const { data }: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_RICK_MORTY_API_URL}/character`,
    );
    const results = data.results.map((result: Character) => {
      return { ...result, isFavorite: false };
    });
    return NextResponse.json(
      {
        message: "Characters Fetched Succesfully! :)",
        results: getOrderedCharacters(results, "ASC"),
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Characters cannot be fetched! :(" },
      { status: 500 },
    );
  }
}
