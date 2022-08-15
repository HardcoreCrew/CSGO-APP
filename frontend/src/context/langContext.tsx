import { createContext } from "react";
import FormsData from '../entities/DTO/forms'


export interface AppLangContextInterface {
  name: string;
  nav: any[]
  forms: FormsData[]        
  
}

export const AppLang = createContext<AppLangContextInterface | null>(null);