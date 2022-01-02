import React from 'react'
import Image from './svg/pessoas.svg'
import './App.css'

function App() {
  const [comments, setComments] = React.useState()
  const [allComments, setAllComments] = React.useState([]) // State react used to show the values in <li> just when click in the button "comment"
  
  function changesTextarea(event){
    setComments(event.target.value)
  }

  function clickButton(){
    const allPreviousComments = [...allComments, comments]
    setAllComments(allPreviousComments)
  }

  return (
    <div className="app">
      <img src={Image} alt="imagem-pessoas" />
      <textarea onChange={changesTextarea} placeholder="Digite seu comentário aqui"></textarea>
      <button onClick={clickButton}>Comentar</button>

      <ul>
        {allComments.map(eachComment => (
          <li key={eachComment}>{eachComment}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;