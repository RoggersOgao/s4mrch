import { Suspense } from "react";
import styles from "./page.module.scss";
import Products from "@/components/products/Products";

export default function Page() {
  return (
    <main className={styles.main}>
      <Suspense fallback="loading ...">
        <Products />
      </Suspense>
    </main>
  );
}
