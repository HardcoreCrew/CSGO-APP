import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { AppLang } from "../../../../context/langContext";
import { NavElement, NavWrapper } from "./style";

interface IProps {};

const Index:FC<IProps> = (props) => {
    const langContext = useContext(AppLang);
    return <NavWrapper>
        {langContext?.nav.map(el => 
        <NavElement>
            <Link to={el.navLink}>{el.navText}</Link>
        </NavElement>)}
    </NavWrapper>
};

export default Index;