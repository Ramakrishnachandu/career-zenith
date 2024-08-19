// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./not-found";
import Header from "@/UIComponents/layout/Header";
import ToastContainer from "@/UIComponents/toast/ToastWrapper";
import Head from "next/head";
import Footer from "@/UIComponents/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Career Zenith - Your Gateway to Job Opportunities",
  description:
    "Career Zenith is designed to help job seekers find their ideal roles and allow employers to post job openings seamlessly.",
  authors: [{ name: "Veera Ramakrishna Chandu", url: "https://career-zenith.vercel.app/developer-profile" }],
  applicationName: "Career Zenith",
  keywords:
    "job portal, job search, career opportunities, employment services, job listings, job vacancies, recruitment platform, career zenith",
  openGraph: {
    title: "Career Zenith - Your Gateway to Job Opportunities",
    description: "Discover job opportunities and connect with employers on Career Zenith.",
    url: "https://career-zenith.vercel.app",
    siteName: "Career Zenith",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Career Zenith Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Zenith - Your Gateway to Job Opportunities",
    description: "Discover job opportunities and connect with employers on Career Zenith.",
    images: "/logo.svg",
  },
  other: {
    'google-site-verification': '6AgdzYlcmn57DL4KSgFa4f3SYXZkesyJ8hVC1kdcOWw',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <div>
          <ToastContainer />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
