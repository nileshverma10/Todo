import { useState } from 'react';
import './App.css';
import ToDo from './component/Todo';

function App() {

  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);


  const itemEvent = (event) => {
    setInput(event.target.value)
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, input];
    });
    setInput("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  };

  return (
    <div className="App">
      <div className="maindiv">
        <div className="datadiv">
          <h1>ToDo Lists</h1>
          <br />
          <div className="data">
            <input type="text" placeholder="Add a Items" value={input} onChange={itemEvent} />
            <button onClick={listOfItems}> + </button>
          </div>

          <ol>
            {items.map((itemsvalue, index) => {
              return <ToDo
                key={index}
                id={index}
                text={itemsvalue}
                onSelect={deleteItems}
              />
            })}
          </ol>
        </div>
      </div>

    </div>
  );
}

export default App;