// layout.tsx hanya untuk layout global (header, footer, dsb)
import { Inter } from "next/font/google";
import "./index.css";


const inter = Inter({ subsets: ["latin"] });

// ✅ Metadata diizinkan di layout server component
export const metadata = {
  title: {
    default: "PT. Bumi Morowali Utama",
    template: "%s | PT. Bumi Morowali Utama",
  },
  description:
    "Website resmi PT. Bumi Morowali Utama.",
  icons: {
    icon: "/BMU.PNG", // ubah ke favicon kamu
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
          {children}
      </body>
    </html>
  );
}