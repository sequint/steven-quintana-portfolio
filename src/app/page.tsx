import SiteLogo from './components/SiteLogo'
import TitleDescription from './components/TitleDescription'
import IconLinks from './components/IconLinks'

export default function Home() {
  return (
    <main>
      <div style={{ display: 'inline-flex' }}>
        <div style={{ width: '42dvw', textAlign: 'right' }}>
          <SiteLogo />
        </div>
        <div style={{ width: '58dvw', marginLeft: 50 }}>
          <TitleDescription />
        </div>
      </div>
      <div style={{ display: 'inline-flex'}}>
        <div style={{ width: '42dvw', textAlign: 'right' }}>
          <IconLinks />
        </div>
      </div>
    </main>
  )
}
