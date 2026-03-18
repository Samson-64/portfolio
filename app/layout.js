import { Manrope, Space_Grotesk } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "@/styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: "Samson Philipo Mamuya | Full Stack Web Developer",
  description:
    "Modern developer portfolio for Samson Philipo Mamuya featuring animated UI, polished project showcases, and a frontend-only Next.js experience.",
  keywords: ["Full Stack Developer", "Next.js Portfolio", "React Developer", "Tailwind CSS", "Framer Motion"],
  openGraph: {
    title: "Samson Philipo Mamuya | Full Stack Web Developer",
    description:
      "Animated developer portfolio with modern UI, polished project showcases, and responsive frontend presentation.",
    url: "https://example.com",
    siteName: "Samson Mamuya Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samson Philipo Mamuya | Full Stack Web Developer",
    description:
      "Modern portfolio site built with Next.js, Tailwind CSS, Framer Motion, and responsive frontend design.",
  },
};

function ThemeScript() {
  const code = `
    try {
      var savedTheme = localStorage.getItem('theme') || 'dark';
      document.documentElement.classList.add(savedTheme === 'light' ? 'light' : 'dark');
    } catch (error) {
      document.documentElement.classList.add('dark');
    }
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <ThemeScript />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
