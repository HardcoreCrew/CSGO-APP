import React, { FC } from "react";
import { CardInputContainer, CardWrapper, NotifWrapper } from "./login_register_card.styled";

type Props = {
    children: React.ReactNode;
    show: boolean;
};


const NotifCard:FC<Props> = ({children, show} : Props ) => {
    return <NotifWrapper animationState={show}>
        <CardWrapper>
            <CardInputContainer>
                {children}
            </CardInputContainer>
        </CardWrapper>
    </NotifWrapper> 
};

export default NotifCard;