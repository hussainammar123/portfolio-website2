import { projects, profile } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'
import SectionKicker from './SectionKicker'

function ProjectsSection() {
  return (
    <section className="work-section section-wrap" id="work">
      <SectionKicker number="02">A FEW THINGS I’VE MADE</SectionKicker>
      <SectionHeading description={<>Small projects. Big lessons.<br />Always something new to learn.</>}>
        Selected <span>work.</span>
      </SectionHeading>

      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>

      <div className="work-footer">
        <span>MADE TO LEARN. BUILT WITH INTENTION.</span>
        <a href={profile.github} target="_blank" rel="noreferrer">More on GitHub <span>↗</span></a>
      </div>
    </section>
  )
}

export default ProjectsSection
