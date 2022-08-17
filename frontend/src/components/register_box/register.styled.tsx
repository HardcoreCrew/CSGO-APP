import styled from 'styled-components'






export const RegisterBoxHeader = styled.div`  
    width: 280px;
    height: 150px;
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
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 20px;
`

export const RegisterHeadBox = styled.div`  
    width: 130px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    input{
        margin-bottom: 8px;
    }
`