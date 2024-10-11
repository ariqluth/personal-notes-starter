import React, { Suspense } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BiArchiveOut, BiArchiveIn } from "react-icons/bi";
import toastr from 'toastr';
import 'toastr/build/toastr.css';

function NoteItemAction({ onDeleteNote, onArchiveNote, id, archived }) {
  const handleDelete = () => {
    onDeleteNote(id);
    toastr.success("Note deleted successfully!", "Success", {
      positionClass: "toast-top-right",
      timeOut: 3000,
      extendedTimeOut: 1000,
    });
  };

  const handleArchive = () => {
    onArchiveNote(id);
    const action = archived ? "unarchived" : "archived";
    toastr.success(`Note ${action} successfully!`, "Success", {
      positionClass: "toast-top-right",
      timeOut: 3000,
      extendedTimeOut: 1000,
    });
  };

  return (
    <Suspense fallback={<div>Loading item ...</div>}>
      <div className="note-item__action">
        <button
          id={id}
          onClick={handleDelete}
          aria-label="Delete Button"
          className="note-item__button"
        >
          <BsFillTrashFill />
        </button>
        <button
          id={id}
          onClick={handleArchive}
          aria-label="Archive Button"
          className="note-item__button"
        >
          {archived ? <BiArchiveOut /> : <BiArchiveIn />}
        </button>
      </div>
    </Suspense>
  );
}

export default NoteItemAction;
