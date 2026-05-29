interface FilterLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function FilterLayout({ children, sidebar }: FilterLayoutProps) {
  return (
    <div style={{ display: "flex" }}>
      <aside>{sidebar}</aside>
      <main>{children}</main>
    </div>
  );
}
