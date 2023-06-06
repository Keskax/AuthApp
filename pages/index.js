import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Auth</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {Guest()}
    </div>
  );
}

//Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold ">Guest HomePage</h3>

      <div className="flex justify-center">
        <Link href={"/login"}>
          <span className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray ">
            Sing In
          </span>
        </Link>
      </div>
    </main>
  );
}
