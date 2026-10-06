import { profile } from '../data/portfolio'
import SectionKicker from './SectionKicker'
import ArrowIcon from './ArrowIcon'
import useReveal from './useReveal'

function ContactSection() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section className="contact-section section-wrap" id="contact" ref={sectionRef}>
      <SectionKicker number="04">THE NEXT CHAPTER</SectionKicker>
      <div className="contact-content">
        <div className="contact-copy">
          <span className="contact-spark" aria-hidden="true">✳</span>
          <h2>Good things start<br />with <span>“hello.”</span></h2>
          <p>Looking for a curious developer, have a project in mind, or just want to compare notes? I’d love to hear from you.</p>
          <a className="button-primary contact-button" href={`mailto:${profile.email}`}>{profile.email} <ArrowIcon /></a>
        </div>
        <div className="contact-stamp" aria-hidden="true">
          <span>LET’S MAKE</span>
          <strong>something<br />meaningful<span>.</span></strong>
          <i>✳</i>
        </div>
      </div>
      <div className="social-links">
        <span>FIND ME ELSEWHERE</span>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
