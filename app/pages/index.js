import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [connected, setConnected] = useState(false);
  const tryToConnect = async () => {
    const res = await fetch("api/test", { method: "POST" });
    const result = await res.json();
    setConnected(result.success);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          connection status: {connected ? "connected" : "not connected"}
        </h1>
        <button onClick={tryToConnect}>Try to connect</button>
      </main>
    </div>
  );
}
