import { useEffect, useState } from 'react';
import './App.css';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';

function App() {
  let [up, setup] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
        setup(true)
      }
      else {
        setup(false)
      }
    })
  }, [])
  return <>
    <div className='container bg-light ' id='up'>
      <NavBar />
      <Profile />
      <hr className='text-light' />
      <Skills />
      <hr className='text-light' />
      <Projects />
      <hr className='text-light' />
      <Contact />
      <hr className='text-light' />
      <Footer />
    </div>
    <a href='#up' className={up?'top up':'top'}>
      <i className="fa-solid fa-arrow-up text-light"></i>
    </a>
  </>
}

export default App;
