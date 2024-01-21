import SiteLogo from './components/SiteLogo'
import TitleDescription from './components/TitleDescription'
import IconLinks from './components/IconLinks'
import BtmImageLinks from './components/BtmImageLinks'

export default function Home() {
  return (
    <main>
      <div style={{ display: 'inline-flex' }}>
        <div style={{ width: '42dvw', textAlign: 'right' }}>
          <SiteLogo />
        </div>
        <div style={{ width: '50dvw', marginLeft: 50 }}>
          <TitleDescription />
        </div>
      </div>
      <div>
        <div style={{ width: '42dvw', textAlign: 'right' }}>
          <IconLinks />
        </div>
      </div>
      <div>
        <BtmImageLinks />
      </div>
    </main>
  )
}
