import React, { useState } from 'react';
import {langPl, langEn} from './utils/langs.js'
import {LangContext} from './context/langContext.js'
import {ThemeProvider} from 'styled-components'
import { lightTheme, darkTheme} from './styles/themes.js'
import GlobalCSS from './styles/global.styled.js'
import BaseLayout from './layouts/baseLayout.js';





function App() {

  const [themeState, setThemeState] = useState('dark')
  const [languageState, setLanguageState] = useState('pl')
  
  const handleTheme = () =>{
    themeState === 'light' ? setThemeState('dark') : setThemeState('light')
  }
  
  const handleLanguage = () =>{
    languageState === 'pl' ? setLanguageState('en') : setLanguageState('pl')
  } 

 

  
  return ( 
    <LangContext.Provider value={languageState ==='pl'? langPl : langEn}>
    <ThemeProvider theme={themeState ==='light'? lightTheme : darkTheme}>
    <GlobalCSS />
    
    <div className="App">
      <BaseLayout />
    </div>

    </ThemeProvider> 

    </LangContext.Provider>
  );
}

export default App;
