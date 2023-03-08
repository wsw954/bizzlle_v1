import Head from "next/head";

import styles from "../styles/Home.module.css";
import Navbar2 from "../components/shared/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bizzlle</title>
      </Head>

      <Navbar2></Navbar2>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Bizzlle</h1>

        <p className={styles.grid}>
          A very Simplified User Friendly system to shop for a new Car online
        </p>
      </main>
    </div>
  );
}
