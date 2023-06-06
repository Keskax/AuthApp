import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {session ? <User session={session} /> : <Guest />}
    </div>
  );
}

// Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest HomePage</h3>
      <div className="flex justify-center">
        <Link href="/login">
          <span className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray">
            Sign In
          </span>
        </Link>
      </div>
    </main>
  );
}

// Authorized User
function User({ session }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Auth Home</h3>
      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>
    </main>
  );
}
