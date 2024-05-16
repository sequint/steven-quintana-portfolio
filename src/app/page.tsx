import { fredoka } from '@/utils/fonts'
import NavBar from './components/NavBar'
import SiteLogo from './components/SiteLogo'
import ProjectHighlights from './components/ProjectHighlights'
import Description from './components/Description'
import AboutMe from './components/AboutMe'

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
            background: 'linear-gradient(360deg, #ffffff 95%, #fcfcfc 100%)',
            padding: '300px 0px'
          }}>
            <AboutMe />
        </div>
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
