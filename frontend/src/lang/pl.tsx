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
    labels: ["REJESTRACJA"],
   
    placeholders: [
      "Pseudonim...",
      "Steam ID...",
      "Login...",
      "Email...",
      "Hasło..."
    ],
    errors: [
      "Pole zawiera spacje",
      "Pole jest wymagane",
      "Pole zawiera znaki specjalne",
      "Błędny adres mailowy",
      "Słabe hasło",
      "Podany login już istnieje",
      "Hasłą się nie zgadzają"
    ]
  },
  loginForm: {
    formName: "Login_Form",
    labels: [
      {title:[
        "WITAJ NA",
        "V BADGER",
        "STREAM APP",
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
    ],
    errors: [
      "Pole zawiera spacje",
      "Pole jest wymagane",
      "Pole zawiera znaki specjalne"
    ]
  }
}
};
export default plLangContext;