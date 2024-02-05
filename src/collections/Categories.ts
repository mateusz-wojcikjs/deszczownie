import type { CollectionConfig } from 'payload/types'

import { CallToAction } from '../blocks/CallToAction'
import { MediaTextSection } from '../blocks/MediaTextSection'
import { OfferSection } from '../blocks/OfferSection'
import { slugField } from '../fields/slug'

const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Kategoria',
    plural: 'Kategorie',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Nazwa kategorii',
      required: true,
      minLength: 3,
    },
    slugField(),
    {
      name: 'media',
      relationTo: 'media',
      required: true,
      type: 'upload',
      label: 'Zdjęcie kategorii',
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [CallToAction, MediaTextSection, OfferSection],
    },
    {
      name: 'parentCategory',
      relationTo: 'categories',
      type: 'relationship',
      label: 'Kategoria nadrzędna',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categoryThumbnail',
      relationTo: 'media',
      type: 'upload',
      label: 'Miniatura kategorii.',
      admin: {
        description:
          'Minuatura jest wyświetlana na liście kategorii. Jeżeli kategoria nie posiada dodanej miniatury to miniaturą na liście kategorii staje się zdjęcie kategorii.',
        position: 'sidebar',
      },
    },
  ],
}

export default Categories
