import { profile } from '../data/portfolio'
import SectionKicker from './SectionKicker'
import useReveal from './useReveal'

function AboutSection() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section className="intro-band" id="about" ref={sectionRef}>
      <div className="section-wrap intro-inner">
        <SectionKicker number="01">A LITTLE INTRODUCTION</SectionKicker>
        <div className="intro-copy">
          <h2>Part problem-solver.<br />Part <span>perpetual learner.</span></h2>
          <div className="intro-body">
            <p>
              I graduated in Information Technology from Lords Institute of
              Engineering & Technology in Hyderabad. I love
              the moment a messy problem starts to make sense — especially
              when Python, a little data, and a good question are involved.
            </p>
            <p>
              From exploring computer vision to building prediction
              projects, I’m ready to bring my curiosity, practical skills,
              and willingness to learn to a collaborative team.
            </p>
            <a className="text-link intro-link" href={`mailto:${profile.email}`}>Have something in mind? <span>↗</span></a>
          </div>
        </div>
        <div className="intro-stats">
          <div><strong>{profile.graduationYear}</strong><span>BE · IT GRADUATE</span></div>
          <div><strong>{profile.cgpa}</strong><span>CGPA · LORDS INSTITUTE OF TECHNOLOGY</span></div>
          <div><strong>HYD<span className="stat-period">.</span></strong><span>BASED IN HYDERABAD, INDIA</span></div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
