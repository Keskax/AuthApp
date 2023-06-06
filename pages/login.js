import Layout from "../layout/layout";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { signIn, signOut } from "next-auth/react";

export default function Login() {
  async function handleGoogleSingIn() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/1 mx-auto flex flex-col gap-6">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">xxxxxxxxxxxxxx</p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5">
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.inputText}
            />
            <span className={`${styles.icon} flex-items-center px-4`}>
              <HiAtSymbol size={25} />
            </span>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.inputText}
            />
            <span className={`${styles.icon} flex-items-center px-4`}>
              <HiFingerPrint size={25} />
            </span>
          </div>

          {/* login buttons */}
          <div className="input-button">
            <Link href={"/home"}>
              <button type="submit" className={styles.button}>
                Login
              </button>
            </Link>
          </div>

          <div className="input-button">
            <button
              type="button"
              onClick={handleGoogleSingIn}
              className={styles.button_custom}
            >
              Sign In with Google{" "}
              <Image src={"/assets/google.svg"} width="20" height={20}></Image>
            </button>
          </div>
        </form>

        {/* button */}
        <p className="text-center text-gray-400 mt-4">
          Don't have an account yet?
          <Link href="/register" passHref>
            <spam className="text-blue-700"> Sign Up</spam>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
