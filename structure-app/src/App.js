import React, {useState} from 'react'; 
import './App.css';
import Tweet from './Tweet';

function App() {

  // const [isRed, setRed] = useState(false);
  //const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);
  // }

  const [users, setUsers] = useState([
    {name: "Ed", messenge: "Hello There"},
    {name: "Johm", messenge: "I am John Snow"},
    {name: "Travesy", messenge: "I am awesome"}
  ]);

  return (
    <div className="app">
      {
        users.map(user => (
          <Tweet name={user.name} message={user.messenge} />
        ))
      }
    </div>
  );
}

export default App;