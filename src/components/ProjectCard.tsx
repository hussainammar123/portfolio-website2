import type { projects } from '../data/portfolio'
import ArrowIcon from './ArrowIcon'
import useReveal from './useReveal'

type Project = (typeof projects)[number]

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useReveal<HTMLElement>()

  return (
    <article ref={cardRef} className={`project-card${project.featured ? ' project-card--featured' : ''}`}>
      <div className="project-image-frame">
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="image-counter">{project.number} / 03</span>
        <span className="image-arrow" aria-hidden="true"><ArrowIcon /></span>
      </div>
      <div className="project-category">{project.category}</div>
      <h3>{project.title}</h3>
      <p className="project-name">{project.name}</p>
      <p className="project-description">{project.description}</p>
      <ul className="tag-list" aria-label="Technologies">
        {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
    </article>
  )
}

export default ProjectCard
