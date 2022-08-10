import React from 'react'
import { LabelInput, LabelText, LabelWrapper } from './labels.stylde'

export default function index({text, input}) {
    return (
        <LabelWrapper>
            <LabelText>
                {text}
            </LabelText>
            <LabelInput>
                {input}
            </LabelInput>
        </LabelWrapper>
    )
}
