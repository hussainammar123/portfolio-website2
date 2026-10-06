import { profile } from '../data/portfolio'
import ArrowIcon from './ArrowIcon'

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label={`${profile.name}, home`}>
        <span className="wordmark-mark">h.</span>
        <span>hussain ammar<span className="wordmark-period">.</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#work">Selected work</a>
        <a href="#skills">What I do</a>
      </nav>
      <a
        className="header-cta"
        href={profile.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Let's talk on WhatsApp"
      >
        Let’s talk <ArrowIcon />
      </a>
    </header>
  )
}

export default Header
