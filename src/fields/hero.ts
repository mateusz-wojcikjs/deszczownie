import type { Field } from 'payload/types'

import linkGroup from './linkGroup'
import richText from './richText'
import label from './richText/label'
import largeBody from './richText/largeBody'

export const hero: Field = {
  name: 'hero',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'type',
      defaultValue: 'mediumImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Duże hero z nagłówkiem, tekstem, linkami i zdjęciem w tle',
          value: 'highImpact',
        },
        {
          label: 'Header z białym tłem, nagłówkiem i tekstem',
          value: 'mediumImpact',
        },
      ],
      required: true,
      type: 'select',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Nagłówek H1',
      required: true,
    },
    richText({
      label: 'Treść pod nagłówkiem',
      admin: {
        elements: ['h1', largeBody, label, 'link'],
        leaves: [],
      },
      required: false,
    }),
    linkGroup({
      overrides: {
        maxRows: 2,
        admin: {
          condition: (_, { type } = {}) => ['highImpact'].includes(type),
        },
      },
    }),
    {
      name: 'media',
      admin: {
        condition: (_, { type } = {}) => ['highImpact'].includes(type),
      },
      relationTo: 'media',
      type: 'upload',
    },
  ],
  label: false,
  type: 'group',
}
