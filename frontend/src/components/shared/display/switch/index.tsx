import React, { FC, useState } from "react";
import { SwitchWrapper } from "./style";

interface ISwitchInfoProps {
    switchInfo: (info: boolean) => void;
  }

const AppSwitch:FC<ISwitchInfoProps> = ({switchInfo}) => {
    const [switchBtn, setSwitchBtn] = useState(false);

    const handleLanguageSwith = () =>{
        setSwitchBtn(!switchBtn)
        switchInfo(switchBtn)
    }
    return <SwitchWrapper selected={switchBtn} onClick={handleLanguageSwith}/>
};

export default AppSwitch;