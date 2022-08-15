import {AppLangContextInterface} from '../context/langContext'
import {FormsData, NavData} from '../entities/DTO' 

const plLangContext: AppLangContextInterface = {
    name: "Polski",
    nav: [
          NavData.create({
            navText: "Start",
            navLink: "/"
          }),
          NavData.create({
            navText: "Logowanie",
            navLink: "/Logowanie"
          }),
          NavData.create({
            navText: "Rejestracja",
            navLink: "/Rejestracja"
          })
    ],
    forms: {
      registerForm: FormsData.create({
        formName: "Register_Form",
        labels: [
          {text: "Name"},
          {text: "Nick"},
          {text: "TEST1"},
          {text: "TEST2"},
        ]
      }),
      loginForm: FormsData.create({
        formName: "Login_Form",
        labels: [
          {title:[
            "Witaj na stronie",
            "YELLOW DUCK",
            "GAME LEAGUE",
          ]},
          {loginBtn: "Logowanie"},
          {registerText:[
            "Nie posiadasz konta?",
            "Zarejestruj",
            "się!"
          ]},
        ],
        placeholders: [
          "Login...",
          "Hasło..."          
        ]
      })
    }
  };

export default plLangContext;