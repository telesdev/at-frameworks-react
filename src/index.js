import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Locadora(props) {
  return (
    <h1>Locadora Master Games</h1>
  )
}


function List(props) {
  
  const[jogos, setJogos] = useState([])

  useEffect(() => {
    const carregar = async () => {
      const res = await fetch('https://api.npoint.io/391c184794ba13e0cd75');
      const data = await res.json();
      setJogos(data);
    }
    carregar()
  }, [])

  return (
      <div className='container'>
        <div className='col'>
        {jogos.map((jogo) => (
          <div className='card' key={jogo.id}>
            <div className='card-body'>
              <h5 className='card-title'>
                {jogo.nome}
              </h5>
              <p className='card-text'>
                {jogo.genero}
              </p>
              <p className='card-text'>
                {jogo.alugado}
              </p>
              <p className='card-text'>
                {jogo.descricao}
              </p>
              <p className='card-text'>
                {jogo.dataLancamento}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
  )
}


function Form(props) {

  const [nome, setNome] = useState('')
  const [genero, setGenero] = useState('')
  const [descricao, setDescricao] = useState('')
  const [dataLancamento, setDataLancamento] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Título:', nome)
    console.log('Gênero:', genero)
    console.log('Descrição:', descricao)
    console.log('Data de Lançamento:', dataLancamento)
  }

  return (
    <form onSubmit={e => {handleSubmit(e)}}>
      <div className='form-group'>
        <label>Título:</label>
        <input required type='text' className='form-control' name='nome' value={nome} onChange={e => setNome(e.target.value)}></input>
      </div>
      
      <div className='form-group'>
        <label>Gênero:</label>
        <input required type='text' className='form-control' name='genero' value={genero} onChange={e => setGenero(e.target.value)}></input>
      </div>

      <div className='form-group'>
        <label>Descrição:</label>
        <textarea required className='form-control' name='descricao' value={descricao} onChange={e => setDescricao(e.target.value)}></textarea>
      </div>

      <div className='form-group'>
        <label>Data de Lançamento:</label>
        <input required type='date' name='dataLancamento' className='form-control' value={dataLancamento} onChange={e => setDataLancamento(e.target.value)}></input>
      </div>

      <button className='btn btn-primary mb-4'>Mostrar no Console</button>
    </form>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <Locadora></Locadora>
      <Form></Form>
      <List></List>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);