import Head from "next/head";
import Link from "next/link";
import Footer from "../comps/footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
      <title>List | Home</title>
      <meta name='keywords' content='ninjas'/>
    </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>homePage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, fuga
          enim aperiam, est adipisci, modi corrupti consequatur nesciunt esse
          facilis ipsa non doloremque quos cumque.
        </p>
        <Link className={styles.btn} href="/listing">
          See Listing
        </Link>
      </div>
    </>
  );
}
