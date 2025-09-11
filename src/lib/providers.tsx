"use client";

import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      {/* Future providers can be added here */}
      {/* Example: ThemeProvider, QueryClient, etc. */}
      {children}
    </>
  );
}
