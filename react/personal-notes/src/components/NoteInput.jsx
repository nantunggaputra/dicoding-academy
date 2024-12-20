/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const charLimit = 50;

  const onSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      addNote({ title, body });
      setTitle("");
      setBody("");
    }
  };

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form onSubmit={onSubmit}>
        <p className="note-input__title__char-limit">
          Sisa karakter: {charLimit - title.length}
        </p>
        <input
          type="text"
          placeholder="Judul..."
          value={title}
          maxLength={charLimit}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="note-input__body"
          placeholder="Isi catatan..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}

export default NoteInput;
