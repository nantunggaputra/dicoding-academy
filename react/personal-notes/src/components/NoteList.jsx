/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive, title }) {
  return (
    <div>
      <h2>{title}</h2>
      {notes.length > 0 ? (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              {...note}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
}

export default NoteList;
