import type { RichTextCustomElement } from '@payloadcms/richtext-slate/dist/types'

import Button from './Button'
import Element from './Element'
import withTable from './plugin'

const richTextTable: RichTextCustomElement = {
  name: 'table',
  Element,
  Button,
  plugins: [withTable],
}

export default richTextTable
