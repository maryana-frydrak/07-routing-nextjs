"use client";

import { Note } from "@/types/note";
import { JSX } from "react";

interface NotesClientProps {
  notes: Note[];
}

export default function NotesClient({ notes }: NotesClientProps): JSX.Element {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
}
