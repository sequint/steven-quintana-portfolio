'use client'

import { useState } from 'react'
import NavBar from './components/NavBar'
import SiteLogo from './components/SiteLogo'
import TitleDescription from './components/TitleDescription'
import IconLinks from './components/IconLinks'
import BtmImageLinks from './components/BtmImageLinks'

export default function Home() {
  const [ middleContent, setMiddleContent ] = useState<string>('description')

  return (
    <>
      <NavBar></NavBar>
      <main>
        <div style={{ display: 'inline-flex' }}>
          <div style={{ width: '42dvw', textAlign: 'right' }}>
            <SiteLogo getClickedImage={(imgDesc: string) => setMiddleContent(imgDesc)} />
          </div>
          <div style={{ width: '50dvw', marginLeft: 50 }}>
            <TitleDescription middleContent={ middleContent } />
          </div>
        </div>
        <div>
          <div style={{ width: '42dvw', textAlign: 'right' }}>
            <IconLinks />
          </div>
        </div>
        <div>
          <BtmImageLinks getClickedImage={(imgDesc: string) => setMiddleContent(imgDesc)} />
        </div>
      </main>
    </>
  )
}
