import React, { Suspense } from "react";
import Input from "./input";

function NoteHeader({ search, setQuery }) {
  return (
    <Suspense fallback={<div>Loading Header ...</div>}>
    <div className="note-app__header">
      <h3>📒 Personal Notes Stater</h3>
      <div className="note-search">
        <Input
          value={search}
          onChange={setQuery}
          type="search"
          id="search_note"
          name="search_note"
          placeholder="Find Notes..."
        />
      </div>
    </div>
    </Suspense>
  );
}

export default NoteHeader;
