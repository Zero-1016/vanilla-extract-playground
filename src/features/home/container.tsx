import * as styles from "./container.css";
import Image from "next/image";

export default function HomeContainer() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <a href="https://cursor.sh" className={styles.primary}>
            Download Cursor
          </a>
          <a
            href="https://github.com/getcursor/cursor"
            className={styles.secondary}
          >
            Star on GitHub
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a href="https://cursor.sh">
          <Image
            src="/next.svg"
            alt="Next Logo"
            className={styles.logo}
            width={24}
            height={24}
          />
          Made by Cursor
        </a>
      </footer>
    </div>
  );
}
