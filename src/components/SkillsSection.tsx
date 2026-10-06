import { skillGroups } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import SectionKicker from './SectionKicker'
import useReveal from './useReveal'

function SkillsSection() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="section-wrap">
        <SectionKicker number="03">MY DIGITAL TOOLKIT</SectionKicker>
        <SectionHeading description={<>A growing toolkit for turning<br />good questions into working ideas.</>}>
          Tools of the <span>trade.</span>
        </SectionHeading>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.number}>
              <span className="skill-number">{group.number}</span>
              <h3>{group.title}</h3>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
