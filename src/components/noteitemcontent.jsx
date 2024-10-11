import React, {Suspense} from "react";
import { showFormattedDate } from "../utils";

function NoteItemContent({ title, body, createdAt }) {
  return (
    <Suspense fallback={<div>Loading Item ...</div>}>
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
    </Suspense>
  );
}

export default NoteItemContent;
