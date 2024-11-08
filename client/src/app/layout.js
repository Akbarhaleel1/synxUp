import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "https://i.postimg.cc/TYQghNSb/synx-up-01-Yb-N9-XRn8-LOi5-J9-Qb.png",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "https://i.postimg.cc/TYQghNSb/synx-up-01-Yb-N9-XRn8-LOi5-J9-Qb.png",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SynxUp",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
