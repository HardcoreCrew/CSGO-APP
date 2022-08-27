import React, { FC } from "react";
import { LeagueInfoBoxContentIco, LeagueInfoBoxContentText, LeagueInfoBoxWrapper } from "./style";
import { FaTwitter, FaTwitch,FaDiscord } from 'react-icons/fa';

interface IProps {};

const Index:FC<IProps> = (props) => {
    return <LeagueInfoBoxWrapper>
        <LeagueInfoBoxContentText>
            YD LEAGUE
        </LeagueInfoBoxContentText>
      <LeagueInfoBoxContentIco >
        <FaDiscord />
        <FaTwitter />
        <FaTwitch />
        </LeagueInfoBoxContentIco>
    </LeagueInfoBoxWrapper>
};

export default Index;