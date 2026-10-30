import type { Metadata, Viewport } from "next";
import { Sora, Inter_Tight, IBM_Plex_Mono, Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { VideoModalProvider } from "@/components/ui/VideoModal";
import "./globals.css";

const sora = Sora({
  variable: "--nf-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--nf-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--nf-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--nf-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cirsec — Cybersecurity and Technology Initiative",
  description:
    "Cirsec is a cybersecurity and technology initiative focused on helping individuals and organisations better understand cybersecurity and adopt safer digital practices.",
  keywords: [
    "cybersecurity",
    "digital safety",
    "security awareness",
    "security education",
    "cyber hygiene",
    "threat awareness",
    "Cirsec",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#010929",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${interTight.variable} ${ibmPlexMono.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background-6 text-white selection:bg-brand selection:text-white">
        <SmoothScroll />
        <VideoModalProvider>
          <Navbar />
          <main className="flex-1 bg-background-6">{children}</main>
          <Footer />
        </VideoModalProvider>
      </body>
    </html>
  );
}
