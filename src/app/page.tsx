import SiteLogo from './components/SiteLogo'
import { fredoka } from '@/utils/fonts'
import styles from './app.module.css'

export default function Home() {
  return (
    <main>
      <div className={ styles.siteLogo }>
        <SiteLogo />
      </div>
      <h1 className={ `${fredoka.className} ${styles.siteTitle}` }>Steven Quintana</h1>
    </main>
  )
}
