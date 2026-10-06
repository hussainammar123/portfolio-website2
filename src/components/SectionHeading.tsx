type SectionHeadingProps = {
  children: React.ReactNode
  description: React.ReactNode
}

function SectionHeading({ children, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2>{children}</h2>
      <p>{description}</p>
    </div>
  )
}

export default SectionHeading
