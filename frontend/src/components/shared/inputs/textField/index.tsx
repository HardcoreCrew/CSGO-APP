import React, { FC, useState, useContext } from "react";
import { AppLang } from "../../../../context/langContext";
import { validateType } from "../../../../validations/formValidate";
import { AppInputWrapper, AppTextInputError, AppTextInputField } from "../inputs.styled";

interface IProps {
    placeholder: string;
    inputType?: string;
    width?: string;
    inputName: string | null;
};

const defaultProps: IProps = {
    placeholder: '',
    inputType: 'text',
    width: '150px',
    inputName: ''
}

interface validationProps {
    isValid: boolean;
    error: string;
}


const Index:FC<IProps> = ({placeholder, inputType, width, inputName} : IProps)=> {
        const langContext = useContext(AppLang);

        const [fieldValidation, setFieldValidation] = useState<validationProps>({
            isValid: true,
            error: ''
        });

        const validateHandler = (data: string) =>{
            let validateData = validateType(inputName? inputName!: '', data, langContext)
            setFieldValidation(prev => ({...prev, ...validateData!}))            
        }

    return <AppInputWrapper width={width}>
        <AppTextInputField 
            type={inputType} 
            placeholder={placeholder} 
            onBlur={(e) =>validateHandler(e.target.value)} />
        <AppTextInputError>
            {fieldValidation.error}
        </AppTextInputError> 
    </AppInputWrapper>
};

Index.defaultProps = defaultProps
 
export default Index;