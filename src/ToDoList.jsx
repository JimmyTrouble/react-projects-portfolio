import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  function deleteItem(id) {
    console.log("clicked", id);
    setItems((prevItem) => {
      return prevItem.filter((item, i) => i !== id);
    });
  }

  return (
    <div className="ToDo">
      <div className="containerToDo">
        <div className="headingToDo">
          <h1>To-Do List</h1>
        </div>
        <div className="formToDo">
          <input onChange={handleChange} type="text" value={inputText} />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map((todoItem, i) => (
              <ToDoItem key={i} id={i} text={todoItem} onChecked={deleteItem} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
