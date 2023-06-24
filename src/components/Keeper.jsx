import React, { useState } from "react";
import Header from "./Header";
import MyFooter from "./MyFooter";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "../Main.css";

function Keeper() {
  const [notes, setNotes] = useState([]);

  function addNote(n) {
    setNotes((prevNotes) => {
      console.log([...prevNotes, n]);
      return [...prevNotes, n];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, i) => {
        return i !== id;
      });
    });
  }

  return (
    <div className="containerKeeper">
      <Header />
      <CreateArea className="formDiv" onSubmit={addNote} />
      <ul>
        {notes.map((item, i) => {
          return (
            <Note
              key={i}
              id={i}
              title={item.title}
              content={item.content}
              onDelete={deleteNote}
            />
          );
        })}
      </ul>
      <MyFooter />
    </div>
  );
}

export default Keeper;
