import './App.css';
import Joke from './Joke.js';

function App() {
  return (
    <div className="jokes">
        <Joke
          joke={{
            question: "Why did the chicken cross the road?",
            punchline: "Because it wanted to!"
          }}/>

        <Joke
          joke={{
            question: "What's the best thing about Switzerland?",
            punchline: "I don't know but the flag is big plus!"
          }}/>

        <Joke
          joke={{
            question: "Why do we tell actors to break a leg?",
            punchline: "Because every play has a cast!"
          }}/>

        <Joke
          joke={{
            question: "Did you hear about the actor who fell through the floorboards?",
            punchline: "He was going through a stage"
          }}/>

        <Joke
          joke={{
            question: "Did you hear about the claustrophobic astronaut?",
            punchline: "He just wanted a little space"
          }}/>
    </div>
  );
}

export default App;
