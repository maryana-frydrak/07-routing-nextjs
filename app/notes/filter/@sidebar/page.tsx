import Link from "next/link";
import css from "./SidebarNotes.module.css";

export default function SidebarPage() {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href="/notes/filter/all">All notes</Link>
      </li>
      {}
    </ul>
  );
}
