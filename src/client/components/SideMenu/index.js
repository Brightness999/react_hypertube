import React from 'react';

import Menuelem from './MenuElem';
import Logo from '../Logo';
import ProfilMenu from '../../containers/ProfilMenu';
import SearchBar from '../../components/SearchBar';
import {
  SideMenuStyled,
  Header,
  MenuRight,
  LinkContainer,
  MiniLinkContainer,
} from './styles';

const menu = [
  {
    id: 0,
    to: '/',
    label: 'Accueil',
  },
  {
    id: 1,
    to: '/tvshow',
    label: 'Séries TV',
  },
  {
    id: 2,
    to: '/movies',
    label: 'Films',
  },
  {
    id: 3,
    to: '/original',
    label: 'Programmes originaux',
  },
  {
    id: 4,
    to: '/recents',
    label: 'Ajouts récents',
  },
  {
    id: 5,
    to: '/users',
    label: 'Ma liste',
  },
];

const isSelected = pathName => window.location.pathname === pathName;

const SideMenu = () => (
  <SideMenuStyled>
    <Header>
      <Logo />
    </Header>
    <LinkContainer>
      {menu.map(item => (
        <Menuelem
          key={item.id}
          selected={isSelected(item.to)}
          label={item.label}
          to={item.to}
        />))}
    </LinkContainer>
    <MiniLinkContainer>
      Parcourir
    </MiniLinkContainer>
    <MenuRight>
      <SearchBar />
      <ProfilMenu />
    </MenuRight>
  </SideMenuStyled>
);

export default SideMenu;
