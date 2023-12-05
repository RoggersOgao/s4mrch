import { Suspense } from "react";
import styles from "./page.module.scss";
import Messages from "@/components/messages/Messages";



export default function Page() {
  return (
    <main className={styles.main}>
      <Suspense fallback="loading ...">
        <Messages />
      </Suspense>
    </main>
  );
}
