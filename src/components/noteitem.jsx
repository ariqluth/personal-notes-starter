import React, {Suspense} from "react";
import NoteItemAction from "./noteitemaction";
import NoteItemContent from "./noteitemcontent";

function NoteItem({ id, title, body, createdAt, archived, action }) {
  const onDeleteNote = (item) =>
    action((notes) => notes.filter((note) => note.id !== item));

  const onArchiveNote = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      })
    );
  };

  return (
    <Suspense fallback={<div>Loading no item ...</div>}>
    <div className="note-item">
      <NoteItemContent
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
        action={action}
      />

      <NoteItemAction
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
        id={id}
        archived={archived}
      />
    </div>
    </Suspense>
  );
}

export default NoteItem;
