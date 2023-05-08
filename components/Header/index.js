import React from "react";
import Link from "next/link";
import styles from "./style.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>Blog</span>
      </Link>
      <nav>
        <Link href="https://github.com/aydanramazanli" target="_blank">
        <h3 className={styles.about}>About</h3>  
        </Link>
      </nav>
    </header>
  );
}
