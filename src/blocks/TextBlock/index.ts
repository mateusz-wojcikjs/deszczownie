import type { Block } from 'payload/types'

import richText from '../../fields/richText'

export const TextBlock: Block = {
  slug: 'textBlock',
  fields: [richText()],
}
