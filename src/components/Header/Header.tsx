import { ReactNode } from "react"

type HeaderProps = {
  title: string
  children: ReactNode
}

function Header({ title, children }: HeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      {children}
    </header>
  )
}

export default Header
