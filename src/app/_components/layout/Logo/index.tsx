import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../assets/images/logo.png'

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="KMK Agro Logo" />
    </Link>
  )
}

export default Logo
