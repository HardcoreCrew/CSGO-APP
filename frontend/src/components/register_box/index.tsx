import AppLabel  from '../shared/display/labels'
import { AppInput } from '../shared/inputs/inputs.styled'
import { CardInputContainer, CardWrapper } from '../shared/cards/login_register_card.styled'
import React, { FC, useContext } from "react";
import { AppLang } from '../../context/langContext';

interface IProps {};

const Index:FC<IProps> = (props) => {
    const langContext = useContext(AppLang);

    return <CardWrapper width={'600px'} >
    <CardInputContainer inputDirection='column'>
        <AppLabel textContent={langContext?.name} inputElement={<AppInput type='text' />} />
        <AppLabel textContent="Nick" inputElement={<AppInput type='text' />} />
        <AppLabel textContent="Nick" inputElement={<AppInput type='text' />} />
        <AppLabel textContent="Nick" inputElement={<AppInput type='text' />} />
    </CardInputContainer>
   
</CardWrapper>
};

export default Index;
