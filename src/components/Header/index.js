import React, { Component } from 'react';

import { Container } from './styles';
import { Conteudo } from '../../styles/global'

export default class Header extends Component {
  render() {
    return (
      <Container>
        <header>
          <Conteudo>
            <h1>Cinema</h1>
          </Conteudo>
        </header>
      </Container>
    );
  }
}
