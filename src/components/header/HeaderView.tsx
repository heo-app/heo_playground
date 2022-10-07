import { useTheme } from '@mui/material/styles';

import { FC } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

import { HEADER_HEIGHT } from './HeaderHelper';

import type { HeaderViewProps } from './HeaderTypes';

const HeaderView: FC<HeaderViewProps> = (props) => {
  const theme = useTheme();

  const HeaderContainer = styled.div`
    background: ${theme.palette.secondary.main};
    height: ${HEADER_HEIGHT}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
  `;

  const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${theme.palette.primary.light};
  `;

  const SimpleText = styled.h3`
    padding-left: 10px;
  `;

  const DesignedText = styled.h2`
    font-family: 'dyna';
    background: ${theme.palette.secondary.contrastText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;

  return (
    <HeaderContainer>
      <IconContainer>
        <AccountCircleIcon />
        <SimpleText>[username]</SimpleText>
      </IconContainer>

      <DesignedText>HEO APP</DesignedText>

      <IconContainer>
        <MenuIcon />
      </IconContainer>
    </HeaderContainer>
  );
};

export default HeaderView;
