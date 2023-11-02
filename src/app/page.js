"use client"

import { Suspense } from 'react'
import styles from './page.module.scss'
import dynamic from 'next/dynamic'

const DynamicDashHome = dynamic(()=> import('@/components/home/DashHome'), {
  ssr:false,
})
export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback="loading ...">
      <DynamicDashHome />
      </Suspense>
    </main>
  )
}
