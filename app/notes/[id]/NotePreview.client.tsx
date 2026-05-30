"use client";

import { Note } from "@/types/note";
import { JSX } from "react";

interface NotePreviewClientProps {
  note: Note;
}

export default function NotePreviewClient({
  note,
}: NotePreviewClientProps): JSX.Element {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
}
