import type { CollectionConfig } from 'payload/types'

import { CallToAction } from '../blocks/CallToAction'
import { MediaTextSection } from '../blocks/MediaTextSection'
import { OfferSection } from '../blocks/OfferSection'
import { slugField } from '../fields/slug'

const Products: CollectionConfig = {
  slug: 'product',
  labels: {
    singular: 'Produkt',
    plural: 'Produkty',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Nazwa produktu / model deszczowni',
      required: true,
      minLength: 3,
    },
    slugField(),
    {
      name: 'productDetailsJSON',
      type: 'json',
      label: 'Parametry deszczowni',
    },
    {
      name: 'media',
      relationTo: 'media',
      required: true,
      type: 'upload',
      label: 'Zdjęcie deszczowni',
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [CallToAction, MediaTextSection, OfferSection],
    },
    {
      name: 'category',
      relationTo: 'categories',
      type: 'relationship',
      label: 'Kategoria deszczowni',
      admin: {
        position: 'sidebar',
      },
      hasMany: false,
    },
  ],
}

export default Products
