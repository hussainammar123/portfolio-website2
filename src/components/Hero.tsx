import { profile } from '../data/portfolio'
import ArrowIcon from './ArrowIcon'

const particles = ['particle-one', 'particle-two', 'particle-three', 'particle-four', 'particle-five', 'particle-six', 'particle-seven', 'particle-eight']

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-atmosphere" aria-hidden="true">
        {particles.map((particle) => <span className={particle} key={particle}>✦</span>)}
      </div>
      <div className="hero-copy">
        <div className="availability"><span /> OPEN TO OPPORTUNITIES <span className="availability-line" /></div>
        <h1><span className="hero-title-accent">PYTHON</span><br />DEVELOPER</h1>
        <p className="hero-description">
          Hi, I’m <strong>Hussain</strong>. An Information Technology graduate
          who loves building useful things with Python, data, and machine learning.
        </p>
        <div className="hero-actions">
          <a
            className="button-primary"
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Let's talk on WhatsApp"
          >
            LET’S TALK <ArrowIcon />
          </a>
        </div>
        <div className="hero-note">
          <span className="note-star">✳</span>
          <span>Available for opportunities</span>
        </div>
      </div>

      <div className="hero-visual" aria-label="Hussain Ammar's monogram avatar">
        <div className="portrait-halo" />
        <div className="portrait-frame">
          <img src="/avatar.svg" alt="Hussain Ammar monogram avatar" className="portrait-image" />
          <span className="portrait-caption">HU · PYTHON DEVELOPER</span>
        </div>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="visual-sticker sticker-top"><span>✳</span> CURIOUS<br />BY NATURE</div>
        <div className="visual-sticker sticker-bottom"><span className="sticker-dot" /> Hyderabad<br /><strong>India</strong></div>
      </div>

      <div className="hero-stats" aria-label="Portfolio highlights">
        <div><strong>03</strong><span>SELECTED PROJECTS</span></div>
        <div><strong>7.98</strong><span>GRADUATE CGPA</span></div>
        <div><strong>’26</strong><span>IT GRADUATE</span></div>
      </div>
      <a className="scroll-cue" href="#about"><span /> A BIT ABOUT ME</a>
    </section>
  )
}

export default Hero
