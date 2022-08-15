import { createContext } from "react";
import FormData from '../entities/DTO/forms'
import NavData from "../entities/DTO/navs";


export interface AppLangContextInterface {
  name: string;
  nav: NavData[];
  forms: {
    registerForm: FormData;
    loginForm: FormData;
  };  
  
}

export const AppLang = createContext<AppLangContextInterface | null>(null);