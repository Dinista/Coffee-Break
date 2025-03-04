"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";

export default function Provider({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session?: SessionProviderProps["session"];
}>) {
  return (
    <SessionProvider session={session} refetchOnWindowFocus={true}>
      {children}
    </SessionProvider>
  );
}
