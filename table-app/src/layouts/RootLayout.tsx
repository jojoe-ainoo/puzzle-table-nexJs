import "@/shared/styles/global.css";
import { Inter } from "next/font/google";
import Footer from "@/components/common/footer/Footer.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Puzzle Table",
  description: "NextJs app to Manage a Puzzle Table",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>{/* Header content */}</header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
