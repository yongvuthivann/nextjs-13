import Search from "./search";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <div>Search</div>
      <div>
        {/* @ts-ignore */}
        <Search />
      </div>
      <div className="flex-1 pl-5">{children}</div>
    </main>
  );
}
