import React, { Component } from 'react';

import Filme from '../../components/Filme'

import { Conteudo } from '../../styles/global';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      filmes: []
    };
  }

  componentDidMount() {
    fetch('http://alunos.b7web.com.br/cinema/')
    .then(r => r.json())
    .then(json => {
      this.setState({filmes: json});
    })
  }

  render() {
    return (
      <Conteudo>
        <ul>
          {this.state.filmes.map( filme => {
            return <Filme data={filme} />
          })}
        </ul>
      </Conteudo>
    );
  }
}
