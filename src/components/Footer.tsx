import { profile } from '../data/portfolio'

function Footer() {
  return (
    <footer className="site-footer">
      <a className="wordmark footer-wordmark" href="#home" aria-label={`${profile.name}, back to home`}>
        <span className="wordmark-mark">h.</span>
        <span>hussain ammar<span className="wordmark-period">.</span></span>
      </a>
      <span>DESIGNED WITH CURIOSITY · MADE IN HYDERABAD</span>
      <a href="#home">BACK TO TOP ↑</a>
    </footer>
  )
}

export default Footer
