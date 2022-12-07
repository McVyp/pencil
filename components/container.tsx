import classNames from "classnames"

export default function Container({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <div className={classNames('max-w-[120rem] mx-auto', className)}>
      {children}
    </div>
  )
}
