import './App.css';
import Joke from './Joke.js';
import jokesData from './jokesData.js'

function App() {

  const jokeComponents = jokesData.map(joke => {
    return(
      <Joke key={joke.id} question={joke.question} punchline={joke.punchline}/>
    )
  })
  
  return (
    <div className="jokes">
          {jokeComponents}
    </div>
  );
}

export default App;
