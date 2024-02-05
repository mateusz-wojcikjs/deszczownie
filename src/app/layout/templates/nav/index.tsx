import React from 'react'
import Link from 'next/link'

import Logo from '../../../_components/layout/Logo'

const Nav = () => {
  return (
    <nav className="flex items-center sticky z-20 top-0 transition-transform bg-white-main shadow">
      <div className="container py-4 flex items-center justify-between">
        <div className="max-w-96">
          <Logo />
        </div>
        <ul className="flex gap-x-8">
          <li>
            <Link href="/oferta">Oferta</Link>
          </li>
          <li>
            <Link href="/">O nas</Link>
          </li>
          <li>
            <Link href="/">Kontakt</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
