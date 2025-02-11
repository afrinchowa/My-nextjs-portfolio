import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Providers from "@/lib/Providers";
import Footer from "@/components/shared/Footer";


export const metadata: Metadata = {
  title: "Chowa's Portfolio",
  description: "Modern & Minimalist JS Mastery",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <Providers>
      <html lang="en" data-theme="light">
        <body>
          <Navbar session={session} />

          <div className="min-h-screen w-[90%] mx-auto">{children}</div>
          <Footer></Footer>
        </body>
      </html>
    </Providers>
  );
}
