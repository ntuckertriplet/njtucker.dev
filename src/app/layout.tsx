import "@/styles/globals.css";

import Layout from "@/components/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nathan Tucker's Website",
  description: "Thank you for visiting my site!",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
