import {AppLangContextInterface} from '../context/langContext'
import {FormsData, NavData} from '../entities/DTO' 

const enLangContext: AppLangContextInterface = {
  name: "English",
  nav: [
        NavData.create({
          navText: "Start",
          navLink: "/"
        }),
        NavData.create({
          navText: "Login",
          navLink: "/Login"
        }),
        NavData.create({
          navText: "Register",
          navLink: "/Register"
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
    })
  }
};

export default enLangContext;