import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import HeaderInterno from './HeaderInterno';

import base,{ storage } from './base';

class NovoAnuncio extends Component {
  constructor(props){
    super(props);
    this.state = {
      sucess:false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    const file = this.foto.files[0];
    const { name,size } = file;
    const ref = storage.ref(name);

    ref
      .put(file)
      .then(img => {
        const novoAnuncio = {
          nome : this.nome.value,
          descricao : this.descricao.value,
          preco: this.preco.value,
          vendedor: this.vendedor.value,
          foto: img.metadata.downloadURLs[0],
          telefone: this.telefone.value,
          categoria: this.categoria.value
        }
        // save to firebase database
        base.push('anuncios',{
          data: novoAnuncio
        })
        .then(() => {
          this.setState({sucess : true})
        });
    });

    e.preventDefault();
  }

  render(){
    { this.state.sucess && <Redirect to='/' /> }
    return (
      <div>
        <HeaderInterno />
        <div className="container" style={{paddingTop: '120px'}}>
          <h1>Novo Anuncio</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="foto">Foto</label>
              <input type="file" className="form-control" id="foto" placeholder="Foto"
                autoComplete="foto" ref={(ref) => this.foto = ref }/>
            </div>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" className="form-control" id="nome" placeholder="Nome"
                autoComplete="nome" ref={(ref) => this.nome = ref }/>
            </div>
            <div className="form-group">
              <label htmlFor="categorias">Categorias</label>
              <select ref={(ref) => this.categoria = ref }>
                {
                  this.props.categorias.map(cat => <option key={cat.url} value={cat.url}>{cat.categoria}</option>)
                }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="descricao">Descrição</label>
              <input type="text" className="form-control" id="descricao"
                placeholder="Descrição" autoComplete="descrição" ref={(ref) => this.descricao = ref } />
            </div>
            <div className="form-group">
              <label htmlFor="preco">Preço</label>
              <input type="text" className="form-control" id="preco"
                placeholder="Preço" autoComplete="preço" ref={(ref) => this.preco = ref } />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input type="text" className="form-control" id="telefone"
                placeholder="Telefone" autoComplete="Telefone" ref={(ref) => this.telefone = ref } />
            </div>
            <div className="form-group">
              <label htmlFor="vendedor">Vendedor</label>
              <input type="text" className="form-control" id="vendedor"
                placeholder="Vendedor" autoComplete="Vendedor" ref={(ref) => this.vendedor = ref } />
            </div>
            <button type="submit" className="btn btn-primary">Salvar anúncio</button>
          </form>
        </div>

      </div>
    );
  }
}
export default NovoAnuncio;
