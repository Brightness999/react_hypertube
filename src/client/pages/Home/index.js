import React from 'react';

import { HomeContainer, MainContent } from './styles';
import Search from '../../containers/Search';
import Section from '../../containers/Section';

const Home = () => (
  <HomeContainer>
    <MainContent>
      <Search />
      <Section title="Nouveautés" />
      <Section title="Tendances actuelles" />
    </MainContent>
  </HomeContainer>
);

export default Home;
