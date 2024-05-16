import { fredoka } from '@/utils/fonts'
import NavBar from './components/NavBar'
import SiteLogo from './components/SiteLogo'
import IconLinks from './components/IconLinks'
import ProjectHighlights from './components/ProjectHighlights'
import Description from './components/Description'

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <div style={{
            display: 'inline-flex',
            marginTop: 150,
            height: 'calc(100vh - 150px)'
          }}>
          <div style={{
              width: '50dvw',
              textAlign: 'right'
            }}>
            <SiteLogo />
          </div>
          <div style={{ width: '50dvw' }}>
            <div style={{ marginLeft: 50 }}>
              <h1 className={ `${ fredoka.className } title`}>Steven Quintana</h1>
              <div className='fadeIn'>
                <Description />
                <ProjectHighlights />
              </div>
            </div>
          </div>
        </div>
        <div
          id='aboutme'
          style={{
            height: 800,
            background: 'linear-gradient(to top, #fffff 95%, #fcfcfc 100%)'
          }}></div>
        {/* <div>
          <div style={{ width: '42dvw', textAlign: 'right' }}>
            <IconLinks />
          </div>
        </div> */}
        <div>
          
        </div>
      </main>
    </>
  )
}
