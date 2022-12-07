import styled from 'styled-components'


export enum VARIANT {
    DEFAULT,
    ERROR,
}

interface InputProps {
    variant?: VARIANT
    margin?: boolean
}

export const Input = styled.input<InputProps>`
    background-color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 5px;
    width: 70%;
    max-width: 100%;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    padding: 0 5px 0 5px;
    height: 35px;
    color: ${props => props.theme.colors.inputText};
    margin: ${props => props.margin ? props.theme.spacing.lg : ''};
    
    &::placeholder{
        color: ${props => props.theme.colors.gray};
    }
`;