import styled from 'styled-components'

interface ButtonProps {
    align: string
}

export const Container = styled.div`
    background-color: ${props => props.theme.colors.primary};
    padding-top: 80px;
    min-height: calc(100vh - 80px);
    min-width: 100vw;
    overflow: auto;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Octo = styled.div`
    img{
        max-width: 270px;
    }
`

export const SearchContainer = styled.div`
    width: 360px;
    max-width: 95%;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CardContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    max-width: 1160px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const ButtonContainer = styled.div<ButtonProps>`
    width: 100%;
    display: flex;
    margin-top: ${props => props.theme.spacing.lg};
    margin-bottom: ${props => props.theme.spacing.lg};
    justify-content: ${props => props.align};
`