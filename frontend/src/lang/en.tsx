import {AppLangContextInterface} from '../context/langContext'

const enLangContext: AppLangContextInterface = {
  name: "English",
  nav:  [
    { navText:"Home", navLink:"/"},
    { navText: "About", navLink: "/about"},
    {navText: "Info", navLink: "/info"},
    {navText: "Teams", navLink: "/teams"},
    {navText: "Register", navLink: "/register"},
  ],
  forms: {
    registerForm: {
      formName: "Register_Form",
      errors: [
        "Field contains whitespace",
        "Field is required",
        "Field contains special signs (only letters)",
        "Wrong mail adress",
        "Weak password (min 8 characters, 1 uppercase, 1 lowercase, 1 number)",
        "The given login already exists",
        "Passwords do NOT match",

      ],
      labels: ["REGISTER"],
      placeholders: [
        "Nick...",
        "Twitch channel...",
        "Login...",
        "Email...",
        "Password..."
      ]
    },
    loginForm: {
      formName: "Login_Form",
      labels: [
        {title:[
          "WELCOME ON",
          "V BADGER",
          "STREAM APP",
        ]},
        {loginBtn: "Login"},
        {registerText:[
          "Don't have an account yet? ",
          "Sing Up ",
          "here! "
        ]},
      ],
      placeholders: [
        "Login...",
        "Password..."          
      ],
      errors: [
        "Pole zawiera spacje",
        "Pole jest wymagane",
        "Pole zawiera znaki specjalne",
        "Wrong login or password"
      ]
    }
  }
};

export default enLangContext;