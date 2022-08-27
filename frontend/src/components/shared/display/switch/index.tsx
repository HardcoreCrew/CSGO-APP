import React, { FC, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppLang } from "../../../../context/langContext";
import { SwitchWrapper } from "./style";

interface ISwitchInfoProps {
    switchInfo: (info: boolean) => void;
  }

const AppSwitch:FC<ISwitchInfoProps> = ({switchInfo}) => {
    const [switchBtn, setSwitchBtn] = useState(false);
   const langContext = useContext(AppLang);

    let navigate = useNavigate();

    const handleLanguageSwith = () =>{
        setSwitchBtn(!switchBtn)
        switchInfo(switchBtn)
    }
    return <SwitchWrapper selected={switchBtn} onClick={handleLanguageSwith}/>
};

export default AppSwitch;