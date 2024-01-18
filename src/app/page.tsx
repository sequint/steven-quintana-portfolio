import SiteLogo from './components/SiteLogo'
import TitleDescription from './components/TitleDescription'

export default function Home() {
  return (
    <main>
      <div style={{ width: '42dvw', textAlign: 'right' }}>
        <SiteLogo />
      </div>
      <div style={{ width: '58dvw', marginLeft: 50 }}>
        <TitleDescription />
      </div>
    </main>
  )
}
