import Orders from "@/components/orders/Orders";
import { Suspense } from "react";
import styles from "./page.module.scss"
export default function Page() {
    return (
      <main className={styles.main}>
        <Suspense fallback="loading ...">
        <Orders />
        </Suspense>
      </main>
    )
  }