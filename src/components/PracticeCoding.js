import { useState } from "react";

export const CountComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increate Count</button>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
    </div>
  );
};

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  return <button onClick={() => setIsOn(!isOn)}>{isOn ? "On" : "Off"}</button>;
};

export const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const handleAddTodo = () => {
    setTodo([...todo, { text, completed: false }]);
    setText('')
  };
  const handleMarkTodo=(index)=>{
    const newToDo=[...todo]
    newToDo[index].completed= !newToDo[index].completed
    setTodo(newToDo)
  }
  const handleRemoveItem =(index)=>{
    const newToDo=[...todo]
    newToDo.splice(index,1)
    setTodo(newToDo)
  }

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={handleAddTodo}>Add To Do</button>
      <ul>
        {todo.map((res, index) => {
          return (
            <div key={index} className="flex">
              <li  style={{textDecoration:res.completed?'line-through':"none",marginRight:'4px'}}>{res.text}</li>
              <button onClick={()=>handleMarkTodo(index)} >Mark Completed </button>
              <button onClick={()=>handleRemoveItem(index)}>Remove Todo</button>
            </div>
          );
        })}
      </ul>
    </>
  );
};



export const SearchBar = ({ items }) => {
    const [query, setQuery] = useState('');
  
    const filteredItems = items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export const AppSearch = () => {
    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  
    return <SearchBar items={items} />;
    
  };
  
