import { fredoka } from '@/utils/fonts'
import NavBar from './components/NavBar'
import SiteLogo from './components/SiteLogo'
import ProjectHighlights from './components/ProjectHighlights'
import Description from './components/Description'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <div id='' style={{
            display: 'inline-flex',
            marginTop: 175,
            height: 'calc(100vh - 175px)',
            width: '100%'
          }}>
          <div style={{
              width: '50%',
              textAlign: 'right'
            }}>
            <SiteLogo />
          </div>
          <div style={{ width: '50%' }}>
            <div style={{ paddingLeft: 50 }}>
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
            background: 'linear-gradient(177deg, #fafafa 80%, #ffffff 100%)',
            padding: '100px 0px 250px 0px',
            borderTopLeftRadius: '30%'
          }}>
            <AboutMe />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
