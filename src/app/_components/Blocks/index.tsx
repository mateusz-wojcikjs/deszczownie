import React, { FC } from 'react'

import { toKebabCase } from '../../../utilities'
import CallToActionBlock from './CallToAction'
import ContentBlock from './ContentBlock'
import OffersBlock from './OffersBlock'
import { Block, BlockData, Blocks, BlocksProps, BlockType } from './types'

const blockComponents: Record<BlockType, FC<Blocks>> = {
  cta: CallToActionBlock,
  content: ContentBlock,
  offerSection: OffersBlock,
}

const Blocks: FC<BlocksProps> = ({ blocks }: BlocksProps): null | React.ReactElement => {
  const hasBlocks: boolean = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <>
        {blocks.map((block: Block, index: number) => {
          const { blockName, blockType }: BlockData = block
          if (blockType && blockType in blockComponents) {
            const Block: FC<Blocks> = blockComponents[blockType]

            if (Block) {
              return <Block key={index} id={toKebabCase(blockName)} {...block} />
            }
          }
          return null
        })}
      </>
    )
  }
  return null
}

export default Blocks
