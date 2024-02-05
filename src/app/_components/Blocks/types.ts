import type { Media, Page } from 'payload-types'

export type CTAProps = Extract<Page['layout'][number], { blockType: 'cta' }>

export type ContentBlockItem = Extract<
  Page['layout'][number],
  { blockType: 'content' }
>['content'][number]

export interface ContentBlockProps {
  content?: ContentBlockItem[]
  isHalfWidth?: Extract<Page['layout'][number], { blockType: 'content' }>['isHalfWidth']
}

export type BlockType = Page['layout'][number]['blockType']

export type OfferSectionBlockType = Extract<Page['layout'][number], { blockType: 'offerSection' }>

export type Blocks = CTAProps | ContentBlockProps | OfferSectionBlockProps

export type Block = Page['layout'][number]

export interface BlocksProps {
  blocks: Block[]
}

export interface OfferSectionBlockProps {
  categories: OfferSectionBlockType['categories']
  title: OfferSectionBlockType['title']
}

export interface CategoryBoxProps {
  thumbnail: Media
  title: string
  slug: string
}

export interface BlockData {
  blockName?: string
  blockType: BlockType
}
