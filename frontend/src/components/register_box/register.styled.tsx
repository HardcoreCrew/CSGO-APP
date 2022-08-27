import styled from 'styled-components'






export const RegisterBoxHeader = styled.div`  
    width: 280px;
    padding: 10px;
    display: flex;
    flex-direction: row;
`

export const RegisterBoxAvatar = styled.div`  
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: grey;
    display: flex;
    flex-direction: row;
    transition: .3s;

    &:hover{
        cursor: pointer;
        background-color: #585858;
    }
`

export const RegisterBoxForm = styled.div` 
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
`

export const RegisterHeadBox = styled.div`  
    width: 130px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
`

export const RegisterErrorBox = styled.div`  
    position: absolute;
    display: flex;
    justify-content: center;
    padding: 20px 30px;
    top: -70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #00000081;
    
`