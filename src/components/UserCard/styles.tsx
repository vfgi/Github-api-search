import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 250px;
    height: 270px;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.cardBackground};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0,0, 0.3);
    img{
        max-width: 100px;
        border-radius: 100%;
    }
`

export const Name = styled.span`
    font-size: 22px;
    font-weight: 600;
    color: ${props => props.theme.colors.inputText};
`