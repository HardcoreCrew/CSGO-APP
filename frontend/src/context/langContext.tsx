import { createContext } from "react";
import FormData from '../entities/DTO/forms'


export interface AppLangContextInterface {
  name: string;
  nav: any[];
  forms: {
    registerForm: FormData;
    loginForm: FormData;
  };  
  
}

export const AppLang = createContext<AppLangContextInterface | null>(null);