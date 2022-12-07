import styled from 'styled-components'

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

export const ProfileInfoContainer = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    align-items: center;
    width: 100%;
    max-width: 500px;
    img{
        max-width: 200px;
        border-radius: 50%;
    }
    @media(max-width: 720px){
        grid-template-columns: 1fr;
        img{
            justify-self: center;
        }
    }
`

export const ProfileInfo = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 35px 1fr;
    margin-bottom: 10px;
    svg{
        width: 25px;
        height: 25px;
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const CardInfoContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 500px;
    justify-content: space-between;
    margin: 20px 0;
`
export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100px;
    height: 50px;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0,0, 0.3);
    background-color: ${props => props.theme.colors.cardBackground};
    img{
        max-width: 30px;
        max-height: 30px;
    }
`

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const CardTitle =styled.span`
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.colors.inputText};
    @media(max-width: 720px){
        font-size: 14px;
    }
`

export const CardLabel =styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${props => props.theme.colors.inputText};
    @media(max-width: 720px){
        font-size: 10px;
    }
`

export const RepoCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    justify-content: space-between;
    margin: 20px 0;
    height: 300px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
        cursor: pointer;
    }
    ::-webkit-scrollbar-track {
        background: transparent; 
    }
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.gray};
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.colors.gray}; 
        cursor: pointer;
    }
`

export const RepoCard = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    min-height: 100px;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0,0, 0.3);
    background-color: ${props => props.theme.colors.cardBackground};

    a{
        color: ${props => props.theme.colors.inputText};
        font-size: 14px;
        font-weight: 600;
    }
`