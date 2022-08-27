import React, { FC, useState, useContext, ChangeEvent } from "react";
import { AppLang } from "../../../../context/langContext";
import { validateType } from "../../../../validations/formValidate";
import { AppInputWrapper,  AppTextInputField, ErrorToolTip } from "../inputs.styled";

interface IProps {
    placeholder: string;
    inputType?: string;
    width?: string;
    inputName: string ;
    inputData?: Function; 
    onChange?: any;
    tooltipOffset? : string | null;
};

const defaultProps: IProps = {
    placeholder: '',
    inputType: 'text',
    width: '150px',
    inputName: '',
    tooltipOffset: '290px',
}

interface validationProps {
    isValid: boolean;
    error: string;
}



const Index:FC<IProps> = ({placeholder, inputType, width, inputName, inputData, tooltipOffset} : IProps)=> {
        const langContext = useContext(AppLang);

        const [fieldValidation, setFieldValidation] = useState<validationProps>({
            isValid: true,
            error: '',
        });

        const validateHandler = (data: string) =>{
            let validateData = validateType(inputName? inputName!: '', data, langContext)
            setFieldValidation(prev => ({...prev, ...validateData!}))            
        }

    return <AppInputWrapper width={width}>
        <AppTextInputField 
            type={inputType} 
            placeholder={placeholder} 
            onBlur={(e: any) =>validateHandler(e.target.value)} 
            onChange={(event: ChangeEvent<HTMLInputElement>): void => inputData? inputData!({inputValue: event.target?.value, inputName: inputName}) : {}}
            isValidStyle={!fieldValidation.isValid? 'active' : null}/>
        <ErrorToolTip
            isValidStyle={!fieldValidation.isValid? 'active' : null}
            tooltipOffset={tooltipOffset}>{fieldValidation.error}</ErrorToolTip>
    </AppInputWrapper>
};

Index.defaultProps = defaultProps
 
export default Index;