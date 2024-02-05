import type { CollectionConfig } from 'payload/types'

import { CallToAction } from '../blocks/CallToAction'
import { MediaTextSection } from '../blocks/MediaTextSection'
import { OfferSection } from '../blocks/OfferSection'
import { hero } from '../fields/hero'
import { slugField } from '../fields/slug'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  labels: {
    singular: 'Strona',
    plural: 'Strony',
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Tytuł strony',
      required: true,
      minLength: 3,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Slider / hero',
          fields: [hero],
        },
        {
          label: 'Treść',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [CallToAction, MediaTextSection, OfferSection],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}

export default Pages
