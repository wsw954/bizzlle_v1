import Head from "next/head";

import styles from "../styles/Home.module.css";
import Navbar2 from "../components/shared/Navbar";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bizzlle</title>
      </Head>

      <Navbar2></Navbar2>
      <main className={styles.main}>
        <h1 className={styles.title}>About this site</h1>

        <p className={styles.grid}>
          Using this site, you will be able to very specifically list the exact
          vehicle you desire, as per a manufacturer's specs
        </p>
      </main>
    </div>
  );
}
