import styled from 'styled-components'

export const Button = styled.button`
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    background-color: ${props => props.disabled ? props.theme.colors.gray : props.theme.colors.action };
    color: ${props => props.theme.colors.white};
    height: 40px;

    
    &:hover {
        opacity: 0.8;
    }
    &:active {
        transform: ${props => props.disabled ? '' : 'translateY(2px)'};
    }
`;