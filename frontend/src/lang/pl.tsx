import {AppLangContextInterface} from '../context/langContext'


const plLangContext: AppLangContextInterface = {
    name: "Polski",
    nav: [
      { navText:"Start", navLink:"/"},
      { navText: "O nas", navLink: "/about"},
      {navText: "Inforacje", navLink: "/info"},
      {navText: "Zespoły", navLink: "/teams"},
      {navText: "Rejestracja", navLink: "/register"},
    ],
forms: {
  registerForm: {
    formName: "Register_Form",
    labels: [],
    placeholders: [
      "Pseudonim...",
      "Steam ID...",
      "Login...",
      "Email...",
      "Hasło..."
    ]
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