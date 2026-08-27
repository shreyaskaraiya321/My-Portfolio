import type { Metadata } from "next";
import { Share_Tech_Mono, Fira_Code, Outfit } from "next/font/google";
import "./globals.css";

const shareTechMono = Share_Tech_Mono({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-share-tech'
});

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-fira-code'
});

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit'
});

export const metadata: Metadata = {
  title: "Shreyas Karaiya | Full-Stack Software Engineer",
  description: "Portfolio of Shreyas Karaiya, a software engineer building AI-powered applications, modern web experiences, and scalable system architectures.",
  openGraph: {
    title: "Shreyas Karaiya | Full-Stack Software Engineer",
    description: "Portfolio of Shreyas Karaiya, a software engineer building AI-powered applications, modern web experiences, and scalable system architectures.",
    siteName: "Shreyas Karaiya Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shreyas Karaiya Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${shareTechMono.variable} ${firaCode.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
