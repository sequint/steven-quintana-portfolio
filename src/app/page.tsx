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
      <nav className={ `${ fredoka.className } navContainer` }>
        <NavBar></NavBar>
      </nav>
      <main>
        <div className='middleContent'>
          <div className='logoContainer'>
            <SiteLogo />
          </div>
          <div className='descriptionContainer'>
            <div className='descriptionInnerContainer'>
              <h1 className={ `${ fredoka.className } title`}>Steven Quintana</h1>
              <div className='fadeIn'>
                <Description />
                <ProjectHighlights />
              </div>
            </div>
          </div>
        </div>
        <div id='aboutme' className='aboutMe'>
            <AboutMe />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
