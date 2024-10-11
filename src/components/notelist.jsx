import React, { Suspense } from "react";

const NoteItem = React.lazy(() => import("./noteitem"));

function NoteList({ notes, label, setNotes }) {
  return (
    <>
      <h2>{label}</h2>
      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="notes-list__empty-message">Nothing To Show</p>
        ) : (
          notes.map((note) => (
            <Suspense fallback={<div>Loading note...</div>} key={note.id}>
              <NoteItem action={setNotes} {...note} />
            </Suspense>
          ))
        )}
      </div>
    </>
  );
}

export default NoteList;
