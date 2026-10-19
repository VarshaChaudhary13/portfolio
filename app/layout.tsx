import type { Metadata } from "next";
// @ts-expect-error Next.js handles CSS side-effect imports at build time.
import "./globals.css";

export const metadata: Metadata = {
  title: "Varsha Chaudhary — Data Scientist & AI Builder",
  description:
    "Portfolio of Varsha Chaudhary: data science, machine learning, applied AI, and research.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Varsha Chaudhary — Data Scientist & AI Builder",
    description: "Building useful systems at the intersection of data and AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
