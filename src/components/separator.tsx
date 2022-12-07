import styled from "styled-components";


export const Separator = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.colors.gray};
    margin-top: ${props => props.theme.spacing.sm};
    margin-bottom: ${props => props.theme.spacing.lg};
`