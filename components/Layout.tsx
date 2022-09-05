import Head from "next/head";
import { ReactNode } from "react";
import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Next.js blog";

type Props = {
  children: ReactNode;
  home?: boolean;
};

function Layout({ children, home }: Props) {
  const name = "yuki's blog";

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/yukiHaga.JPG"
              className={utilsStyles.borderCircle}
            />
            <h2
              className={`${utilsStyles.heading2Xl} ${styles.headerHomeImage}`}
            >
              {name}
            </h2>
          </>
        ) : (
          <>
            <img
              src="/images/yukiHaga.JPG"
              className={utilsStyles.borderCircle}
            />
            <h2 className={utilsStyles.heading2Xl}>{name}</h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
