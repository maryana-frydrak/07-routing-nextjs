interface FilterLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal?: React.ReactNode;
}

export default function FilterLayout({
  children,
  modal,
  sidebar,
}: FilterLayoutProps) {
  return (
    <div style={{ display: "flex" }}>
      <aside>{sidebar}</aside>
      <main>{children}</main>
      {modal}
    </div>
  );
}
