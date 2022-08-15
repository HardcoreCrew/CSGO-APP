import React, { useState } from 'react';
import enLangContext from './lang/en'
import plLangContext from './lang/pl'
import {AppLang} from './context/langContext'
import {ThemeProvider} from 'styled-components'
import lightTheme from './styles/themeLight'
import darkTheme from './styles/themeDark'
import GlobalCSS from './styles/global.styled'
import {Route, Routes } from "react-router-dom";
import BaseLayout from './layouts/baseLayout';
import LoginPage from './pages/login'
import RegisterPage from './pages/register'



function App() {

  const [themeState, setThemeState] = useState('dark')
  const [languageState, setLanguageState] = useState('en')
  
  const handleTheme = () =>{
    themeState === 'light' ? setThemeState('dark') : setThemeState('light')
  }
  
  const handleLanguage = () =>{
    languageState === 'pl' ? setLanguageState('en') : setLanguageState('pl')
  } 



  
  return ( 
    <AppLang.Provider value={languageState ==='pl'? plLangContext : enLangContext}>
    
    <ThemeProvider theme={themeState ==='light'? lightTheme : darkTheme}>
    <GlobalCSS />
    
    <div className="App">
      <Routes>
          <Route path="/" element={<BaseLayout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>

    </ThemeProvider> 

    </AppLang.Provider>
  );
}

export default App;
