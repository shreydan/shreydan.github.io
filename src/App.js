import React, { useState } from 'react'
import {useMediaQuery} from 'react-responsive'
import Desktop from './Components/Desktop'
import Mobile from './Components/Mobile'
import './App.css';

const DesktopMediaQuery = ({children}) => {
  const isDesktop = useMediaQuery({orientation: 'landscape'})
  return isDesktop ? children : null
}

const MobileMediaQuery = ({children}) => {
  const isMobile = useMediaQuery({orientation: 'portrait'})
  return isMobile ? children : null
}

function App() {

  const [links] = useState([
    {
      title: 'GitHub',
      description: 'see my open-source contributions',
      bgColor: '#292929',
      icon: '👨‍💻️',
      url: 'https://github.com/shreydan'
    },
    {
      title: 'Youtube',
      description: 'watch my videos',
      bgColor: '#fc4747',
      icon: '📹️',
      url: 'https://youtube.com/channel/UCYq4kx77YS2UQ8D_qhZ8s6g'
    },
    {
      title: 'Blog',
      description: 'read my blog on dev.to',
      bgColor: '#69289e',
      icon: '📝️',
      url: 'https://dev.to/shreydan'
    },
    {
      title: 'LinkedIn',
      description: 'get to know me professionally',
      bgColor: '#317cf5',
      icon: '👨‍💼️',
      url: 'https://linkedin.com/in/shreydan'
    },
    {
      title: 'Twitter',
      description: 'read my tweets I guess',
      bgColor: '#26bdf0',
      icon: '📣️',
      url: 'https://twitter.com/shrey.dan'
    },
    {
      title: 'Instagram',
      description: 'visualize my code',
      bgColor: '#f02486',
      icon: '📸️',
      url: 'https://instagram.com/shrey.dan'
    }
  ])
 
  return (
    <div className="App">
      <DesktopMediaQuery>
        <Desktop links={links}/>
      </DesktopMediaQuery>
      <MobileMediaQuery>
        <Mobile links={links}/>
      </MobileMediaQuery>
    </div>
  );
}

export default App;
