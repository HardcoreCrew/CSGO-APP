
import {AppLangContextInterface} from '../context/langContext'

const enLangContext: AppLangContextInterface = {
  name: "English",
  nav: [
      {
          text: "Start",
          link: "/"
      },{
        text: "Logowanie",
        link: "/Logowanie"
      },{
        text: "Rejestracja",
        link: "/Rejestracja"
      }
  ],
  forms: [
      {
        formName: "register_form",
        labels: [
            {text: string}
        ],
        inputPlaceholders: [
            {text: string}
        ]
      },
  ]
};

export default enLangContext;