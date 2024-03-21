"use client";

import { AppContextProvider } from "@/store/app-context";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export function Providers({ children }: Props) {
  return <AppContextProvider>{children}</AppContextProvider>;
}
