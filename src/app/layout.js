import { Roboto } from 'next/font/google'
import './globals.css'
import styles from "./layout.module.scss"
import Nav from '@/components/nav/Nav'
import { SiteProvider } from '@/components/contexts/siteStates/SiteContext'
import cls from "classnames";
// const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['100','300','400','500', '700', '900']})



export const metadata = {
  title: "s4Mrch",
  description: "Next gen Shopping App",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <SiteProvider>
      <body className={cls(roboto.className, styles.body)}>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.main}>{children}</div>
      </body>
        </SiteProvider>
    </html>
  )
}
