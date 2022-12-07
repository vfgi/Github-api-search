import React from 'react';
import { DefaultTheme, withTheme } from 'styled-components'
import { Button } from '../Button';
import * as S from './styles'

interface CardProps {
  theme: DefaultTheme
  image: string
  login: string
  key: number
  onClick: () => void
}

const UserCard: React.FC<CardProps> = (props: CardProps) => {

  return (
    <S.CardContainer onClick={props.onClick} key={props.key}>
      <img src={props.image} alt={props.login} />
      <S.Name>{props.login}</S.Name>
      <Button onClick={props.onClick}>View Profile</Button>
    </S.CardContainer>
  );
}

export default withTheme(UserCard);
