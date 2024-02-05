import React, { FC } from 'react'

import { BasicHero, HeaderHero, MainHero } from './Heros'
import { HeroProps, Heros, HerosProps } from './types'

const heroes: Record<Heros, FC<HerosProps>> = {
  none: null,
  highImpact: MainHero,
  mediumImpact: BasicHero,
  lowImpact: HeaderHero,
}
const Hero: FC<HeroProps> = ({
  type,
  title,
  richText,
  media,
  links,
}: HeroProps): null | React.ReactElement => {
  if (!type || type === 'none') return null

  const HeroToRender: FC<HerosProps> = heroes[type]

  if (!HeroToRender) return null
  return <HeroToRender {...{ links, title, richText, media }} />
}

export default Hero
