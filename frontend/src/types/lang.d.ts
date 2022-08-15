import 'styled-components';

declare module 'styled-components' {
  export interface DefaultLang{
    name: string;
    nav: [
        {
            text: string;
            link: string;
        }
    ]
    forms: [
        {
            formId: number;
            formName: string;
            labels: [
                {text: string}
            ]
            inputPlaceholders: [
                {text: string}
            ]
        }
    ]
  }
} 
