import {AppLangContextInterface} from '../context/langContext'

const enLangContext: AppLangContextInterface = {
  name: "English",
  nav: {
        startNav: { navText:"Start", navLink:"/"},
        loginNav: { navText: "Login", navLink: "/login"},
        registerNav: {navText: "Register", navLink: "/register"}
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
      placeholders: [
        "Nick",
        "Steam ID",
        "Login",
        "Email",
        "Password"
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