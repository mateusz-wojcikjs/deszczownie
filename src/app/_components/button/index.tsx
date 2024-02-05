import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'

import { Page } from '../../../payload-types'

export type ButtonVariants = Page['hero']['links'][number]['link']['appearance']
export type ButtonProps = {
  href: string
  variant: ButtonVariants
  children: React.ReactNode
  isBlank?: boolean
}
const Button = ({ href, variant, children, isBlank }: ButtonProps) => {
  const variantClassname = clsx({
    ['bg-primary border-primary hover:bg-secondary']: variant === 'primary',
    ['bg-secondary border-secondary hover:bg-primary']: variant === 'secondary',
  })

  return (
    <Link
      className={clsx(
        'text-white-main py-3 px-6 text-xl transition-colors flex items-center gap-x-3 uppercase rounded border-2 w-64  justify-center',
        variantClassname,
      )}
      href={href}
      target={isBlank && '_blank'}
    >
      {children}
    </Link>
  )
}

export default Button
