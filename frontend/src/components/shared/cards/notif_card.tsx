import React, { FC } from "react";
import { CardInputContainer, CardWrapper, NotifWrapper } from "./login_register_card.styled";

type TProps = {
    children: React.ReactNode;
    show: boolean;
    width?: string;
};

const defaultProps: TProps = {
    width: '150px',
    children: undefined,
    show: false
}


const NotifCard:FC<TProps> = ({children, show, width} : TProps ) => {
    return <NotifWrapper  animationState={show}>
        <CardWrapper >
            <CardInputContainer width={width}>
                {children}
            </CardInputContainer>
        </CardWrapper>
    </NotifWrapper> 
};

NotifCard.defaultProps = defaultProps
export default NotifCard;