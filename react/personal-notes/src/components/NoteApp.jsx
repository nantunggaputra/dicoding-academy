/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";

function NoteApp() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState("");

  const addNote = ({ title, body }) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleArchiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const onSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="note-app__body">
        <SearchBar keyword={searchKeyword} onSearch={onSearch} />
        <NoteInput addNote={addNote} />
        <NoteList
          notes={filteredNotes.filter((note) => !note.archived)}
          onDelete={deleteNote}
          onArchive={toggleArchiveNote}
          title="Catatan Aktif"
        />
        <NoteList
          notes={filteredNotes.filter((note) => note.archived)}
          onDelete={deleteNote}
          onArchive={toggleArchiveNote}
          title="Arsip"
        />
      </div>
    </div>
  );
}

export default NoteApp;
