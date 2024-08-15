// app/layout.tsx (or layout.js)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './not-found';
import Header from "@/UIComponents/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Career Nexus - Your Gateway to Job Opportunities",
  description: "Career Nexus is designed to help job seekers find their ideal roles and allow employers to post job openings seamlessly.",
  authors: [{ name: 'Veera Ramakrishna Chandu' }],
  applicationName: 'Career Nexus',
  keywords: 'job portal, job search, career opportunities, employment services, job listings, job vacancies, recruitment platform',
  openGraph: {
    title: "Career Nexus - Your Gateway to Job Opportunities",
    description: "Discover job opportunities and connect with employers on Career Nexus.",
    url: "https://career-nexus.vercel.app",
    siteName: "Career Nexus",
    images: [
      {
        url: "/path-to-your-image.jpg", // Replace with your image path
        width: 800,
        height: 600,
        alt: "Career Nexus Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Nexus - Your Gateway to Job Opportunities",
    description: "Discover job opportunities and connect with employers on Career Nexus.",
    images: "/path-to-your-image.jpg", // Replace with your image path
  },
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
