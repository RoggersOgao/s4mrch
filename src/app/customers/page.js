import { Suspense } from "react";
import styles from "./page.module.scss";
import Customers from "@/components/customers/Customers";




export default function Page() {
  return (
    <main className={styles.main}>
      <Suspense fallback="loading ...">
        <Customers />
      </Suspense>
    </main>
  );
}
