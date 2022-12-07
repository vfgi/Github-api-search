import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../redux/reducers/themeChanger';
import MoonIcon from '../Icons/moon';
import { SwitchButton } from '../switchButton';
import { DefaultTheme, withTheme } from 'styled-components'
import * as S from './styles'
import SunIcon from '../Icons/sun';
import GitHubIcon from '../Icons/github';

interface Theme {
  theme: DefaultTheme
}

const Header = ({theme}: Theme) => {
  const dispatch = useDispatch()


  return (
   <S.HeaderContainer>
      <GitHubIcon />
      <S.SwitchContainer>
        <MoonIcon color={theme.colors.moon}/>
        <SwitchButton>
          <input
            type="checkbox"
            onChange={() =>
              dispatch(changeTheme())
            }
          />
          <span></span>
        </SwitchButton>
        <SunIcon color={theme.colors.sun}/>
      </S.SwitchContainer>
    </S.HeaderContainer>
  );
}

export default withTheme(Header);
