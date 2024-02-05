import type { CollectionConfig } from 'payload/types'

import richText from '../fields/richText'

const Portfolio: CollectionConfig = {
  slug: 'portfolio',
  labels: {
    singular: 'Realizacja',
    plural: 'Realizacje',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'id', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      label: 'Nazwa realizacji',
      type: 'text',
    },
    richText({
      name: 'description',
      label: 'Treść',
    }),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default Portfolio
