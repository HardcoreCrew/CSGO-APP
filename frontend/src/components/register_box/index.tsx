import React, { useEffect, useRef, useState } from 'react'
import { RegConsoleWrapper } from './register_console/reg_console.styled'
export default function Index() {

    // const sendLetters = (text, span_to_update) =>{
    //     for (const t of text) {
    //         console.log(t);
    //     }
    // }

    

    // const consoleMock = [
    //     'YD-League INIT...',
    //     'YD-League Conecting...',
    //     'Connection established !',
    //     'Create new user...'
    // ]

    const [consoleContent, setConsoleContent] = useState([])
    
    return (
        <RegConsoleWrapper >
           {consoleContent.map(el => <>{el}<br/></>)}
           
        </RegConsoleWrapper>
    )
}
