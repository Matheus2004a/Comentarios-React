import React from 'react'
import Image from './svg/pessoas.svg'
import './App.css'

function App() {

  const [comments, setComments] = React.useState()
  const [allComments, setAllComments] = React.useState([]) // Estado do react usado para mostrar os valores na <li> apenas quando clicar no botão "comentar"
  
  function changesTextarea(event){
    setComments(event.target.value)
  }

  function clickButton(){
    const allPreviousComments = [...allComments, comments]

    setAllComments(allPreviousComments)
  }

  return (
    <div className="App">
      <img src={Image} alt="imagem-pessoas" />
      <textarea onChange={changesTextarea} placeholder="Digite seu comentário aqui"></textarea>
      <button onClick={clickButton}>Comentar</button>

      <ul>
        {allComments.map((eachComment) => (
          <li key={eachComment}>{eachComment}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
