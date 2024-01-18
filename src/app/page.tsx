import SiteLogo from './components/SiteLogo'
import styles from './app.module.css'

export default function Home() {
  return (
    <main>
      <div className={ styles.siteLogo }>
        <SiteLogo />
      </div>
      <h1 className={ styles.siteTitle }>Steven Quintana</h1>
    </main>
  )
}
