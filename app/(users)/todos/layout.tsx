// import React from "react";
import TodoList from "./todo-list";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        {/* @ts-ignore */}
        <TodoList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
