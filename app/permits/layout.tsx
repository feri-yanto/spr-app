import React from "react";

export default function RootLayout({ children }: LayoutProps<"/permits"> ) {
  return (
    <>
      {children}
    </>
  );
}