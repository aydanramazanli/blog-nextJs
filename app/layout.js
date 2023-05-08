import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/global.css";
import styles from "./style.module.css";

const interFont = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFont.className}>
      <body className={styles.container}>
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
