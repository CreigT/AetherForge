import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AetherForge Collective — Workspace Intelligence, Made Physical",
  description: "Made-to-measure modular workspaces designed by collaborating AI agents and fabricated near you.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
