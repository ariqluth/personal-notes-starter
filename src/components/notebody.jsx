import React, { Suspense } from "react";
const NoteInput = React.lazy(() => import('./noteinput'));
const NoteList = React.lazy(() => import('./notelist'));

function NoteBody({ notesAll, notesArchive, setNotes }) {
  return (
    <div className="note-app__body">
      <Suspense fallback={<div className="skeleton">Loading input...</div>}>
        <NoteInput setNotes={setNotes} />
      </Suspense>
      <Suspense fallback={<div className="skeleton">Loading notes...</div>}>
        <NoteList label="All Notes" setNotes={setNotes} notes={notesAll} />
      </Suspense>
      <Suspense fallback={<div className="skeleton">Loading archive...</div>}>
        <NoteList label="Archive Notes" setNotes={setNotes} notes={notesArchive} />
      </Suspense>
    </div>
  );
}

export default NoteBody;
