import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './not-found'
import Header from "@/UIComponents/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Career Nexus",
  description: "CAreer Nexus Create  by Veera Ramakrishna Chandu ",
  authors: [{name: 'Veera Ramakrishna Chandu'}],
  applicationName:'Career Nexus',
  keywords:'Career Nexus Job Seeking and posting web site, Best Job Search portal'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          {children}
        </div>

      </body>
    </html>
  );
}
