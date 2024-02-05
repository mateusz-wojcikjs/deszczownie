import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../../_components/layout/Logo'
import MouseIcon from '../../../assets/svg/mouse.svg'

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container">
        <div className="flex gap-8 pt-16">
          <div className="basis-1/4">
            <Logo />
          </div>
          <div className="basis-1/4">
            <h5 className="text-white-main font-medium text-2xl mb-2">Oferta</h5>
            <ul className="list-none text-gray-main">
              <li className="underline-offset-4 hover:underline">
                <Link href="/">Deszczownia 1</Link>
              </li>
              <li>
                <Link href="/">Deszczownia 2</Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <div className="flex flex-col">
              <span className="address__tel">
                <a className="text-white-main" href="tel:+48612580179">
                  <em className="text-gray-main">+48</em> 61 258 01 79
                </a>
              </span>
              <span className="text-primary">
                Email:&nbsp;<a href="mailto:biuro@kmkagro.com">biuro@kmkagro.com</a>
              </span>
              <address className="text-white-main">
                <span>Ul. Poznańska 20, Brodowo</span>
                <br />
                <span>63-000 Środa Wlkp.</span>
                <Image src={MouseIcon} alt={''} className="address__icon" />
              </address>
            </div>
          </div>
        </div>
        <div className="py-8 text-white-main">
          © {new Date().getFullYear()} KMK Agro deszczownie, All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
