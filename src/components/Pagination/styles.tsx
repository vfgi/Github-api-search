import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PageNumbers = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 320px;
    font-weight: 600;

 li{
    padding: 10px;
    border-radius: 5px;
    height: 20px;
    cursor: pointer;
    color: ${props => props.theme.colors.inputText};
    display: flex;
    justify-content: center;
    align-items: center;
}

li:hover{
    background-color: ${props => props.theme.colors.gray};
}

li.active {
    background-color: ${props => props.theme.colors.action};
    color: ${props => props.theme.colors.white};

}
`