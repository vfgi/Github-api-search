import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.black};
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px 0 20px;
`
 
export const SwitchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`