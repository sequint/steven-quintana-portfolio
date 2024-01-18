import SiteLogo from './components/SiteLogo'
import TitleDescription from './components/TitleDescription'
import styles from './app.module.css'

export default function Home() {
  return (
    <main>
      <div className={ styles.siteLogo }>
        <SiteLogo />
      </div>
      <div className={ styles.titleDescription }>
        <TitleDescription />
      </div>
    </main>
  )
}
