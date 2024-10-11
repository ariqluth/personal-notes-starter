import React, {Suspense} from "react";

function NoteFooter() {
  return (
    <Suspense fallback={<div>Loading footer ...</div>}>
    <div className="note-app__footer">
      <p>Copyright &#169; 2024, Ariq Luthfi Rifqi</p>
    </div>
    </Suspense>
  );
}

export default NoteFooter;
