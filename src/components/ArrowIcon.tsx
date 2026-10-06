type ArrowIconProps = {
  className?: string
}

function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  )
}

export default ArrowIcon
