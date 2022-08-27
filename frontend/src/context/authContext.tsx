import { createContext } from "react";


export interface AppAuthContextInterface {
  isAuth: string;
   
}

export const AppAuth = createContext<AppAuthContextInterface | null>(null);