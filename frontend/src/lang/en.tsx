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
      labels: [],
      placeholders: [
        "Nick...",
        "Steam ID...",
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
          "YELLOW DUCK",
          "GAME LEAGUE",
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
      ]
    }
  }
};

export default enLangContext;