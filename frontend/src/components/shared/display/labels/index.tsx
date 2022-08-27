import React, { FC } from 'react'
import { LabelInput, LabelText, LabelWrapper } from './labels.stylde'

interface IProps {
    textContent?: string | null;
    inputElement: React.ReactNode;
}

const Index:FC<IProps> = ({textContent, inputElement}: IProps) => {
    return <LabelWrapper>
    <LabelText>
        {textContent}
    </LabelText>
    <LabelInput>
        {inputElement}
    </LabelInput>
</LabelWrapper>
};

export default Index;

