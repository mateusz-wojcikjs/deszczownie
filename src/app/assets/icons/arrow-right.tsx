import React from 'react'

import { IconProps } from './types'

const ArrowRight: React.FC<IconProps> = ({
  color = 'currentColor',
  size = 20,
  title = 'ArrowRight',
  ...attributes
}) => {
  return (
    <svg
      fill="none"
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <title>{title}</title>
      <path
        d="M3 10.5H17"
        stroke={color}
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
      <path
        d="M12.5 5.5L17.5 10.5L12.5 15.5"
        stroke={color}
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  )
}

export default ArrowRight
