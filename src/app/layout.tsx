import type { Metadata, Viewport } from "next";
import "./globals.css";
import BottomNav from "@/components/layout/BottomNav";

export const viewport: Viewport = {
  themeColor: "#0b3d91",
};

export const metadata: Metadata = {
  title: "GSV Multi-Speciality Hospital",
  description: "Hospital Management & Appointment Portal",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "GSV Hospital"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mobile-container">
          {children}
          <div className="bottom-spacer"></div>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
