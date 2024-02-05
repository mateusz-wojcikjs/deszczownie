import type { Page } from 'payload-types'

export interface HeaderHeroProps {
  title: string
  media?: Page['hero']['media']
}

export interface BasicHeroProps {
  title: string
  richText?: Page['hero']['richText']
}

export interface MainHeroProps extends BasicHeroProps {
  media?: Page['hero']['media']
  links?: Page['hero']['links']
}

export type Link = Page['hero']['links'][number]['link']

export type Heros = Page['hero']['type'] | 'lowImpact'
export type HeroProps = Omit<Page['hero'], 'type'> & { type: Heros }

export type HerosProps = BasicHeroProps | MainHeroProps | HeaderHeroProps
