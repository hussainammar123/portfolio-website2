type SectionKickerProps = {
  number: string
  children: React.ReactNode
}

function SectionKicker({ number, children }: SectionKickerProps) {
  return (
    <div className="section-kicker">
      <span>{number}</span> {children}
    </div>
  )
}

export default SectionKicker
