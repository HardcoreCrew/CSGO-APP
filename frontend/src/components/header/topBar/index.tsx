import React, { FC } from "react";
import  LeagueBox  from "./leagueInfoBox";
import  NavBar  from "./nav";
import {TopBoxEndBlock, TopBoxWrapper} from './style'

interface IProps {

};

const Index:FC<IProps> = (props) => {
    return <TopBoxWrapper>
        <LeagueBox />
        <NavBar />
        <TopBoxEndBlock />
    </TopBoxWrapper>
};

export default Index;