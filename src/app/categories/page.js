import { Suspense } from "react";
import styles from "./page.module.scss";
import Categories from "@/components/categories/Categories";


export default function Page() {
  return (
    <main className={styles.main}>
      <Suspense fallback="loading ...">
        <Categories />
      </Suspense>
    </main>
  );
}
