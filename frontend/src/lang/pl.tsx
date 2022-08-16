import {AppLangContextInterface} from '../context/langContext'


const plLangContext: AppLangContextInterface = {
    name: "Polski",
    nav: {
      startNav: { navText:"Start", navLink:"/"},
      loginNav: { navText: "Login", navLink: "/logowanie"},
      registerNav: {navText: "Register", navLink: "/rejestracja"}
    },
forms: {
  registerForm: {
    formName: "Register_Form",
    labels: [
      {text: "Name"},
      {text: "Nick"},
      {text: "TEST1"},
      {text: "TEST2"},
    ],
    placeholders: []
  },
  loginForm: {
    formName: "Login_Form",
    labels: [
      {title:[
        "WITAJ NA",
        "YELLOW DUCK",
        "GAME LEAGUE",
      ]},
      {loginBtn: "Logowanie"},
      {registerText:[
        "Nie masz konta? ",
        "zarejestruj się ",
        "tutaj! "
      ]},
    ],
    placeholders: [
      "Login...",
      "Hasło..."          
    ]
  }
}
};
export default plLangContext;