import { fetchNotes } from "@/lib/api";
import type { Note } from "@/types/note";

interface FilteredNotesPageProps {
  params: Promise<{ tag: string | string[] }>;
}

export default async function FilteredNotesPage({
  params,
}: FilteredNotesPageProps) {
  const { tag } = await params;
  const currentTag = Array.isArray(tag) ? tag[0] : tag;
  const tagForApi = currentTag === "all" ? null : currentTag;
  const data = await fetchNotes(1, 10, tagForApi, "");

  if (!data || !data.notes || !Array.isArray(data.notes)) {
    return <div>Нотатки не знайдені.</div>;
  }

  return (
    <div>
      <h1>{currentTag}</h1>
      <ul>
        {data.notes.map((note: Note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
}
