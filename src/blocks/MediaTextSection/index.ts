import type { Block } from 'payload/types'

import { MediaBlock } from '../MediaBlock'
import { TextBlock } from '../TextBlock'

export const MediaTextSection: Block = {
  slug: 'content',
  labels: {
    singular: 'Sekcja ze zdjęciem i tekstem',
    plural: 'Sekcje ze zdjęciem i tekstem',
  },
  fields: [
    {
      name: 'content',
      label: 'Treść',
      type: 'blocks',
      blocks: [MediaBlock, TextBlock],
      maxRows: 2,
    },
    {
      name: 'isHalfWidth',
      label: 'Szerokość obrazka na pół ekranu',
      type: 'checkbox',
    },
  ],
}
