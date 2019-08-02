import React, { Component } from 'react';

import { Container } from './styles';

export default class Filme extends Component {
  render() {
    return (
      <li>
        <Container>
          <img width="100%" src={this.props.data.avatar} />
          <div>
            <p>{this.props.data.titulo}</p>
          </div>
        </Container>
      </li>
    );
  }
}
