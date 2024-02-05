import type { Block } from 'payload/types'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'enableAdditionalImages',
      type: 'checkbox',
      label: 'Dodaj ozdobne obrazki przy zdjęciu',
      defaultValue: false,
    },
    {
      name: 'additionalImages',
      label: 'Dodatkowe obrazki',
      labels: {
        singular: 'Dodatkowy obrazek',
        plural: 'Dodatkowe obrazki',
      },
      type: 'array',
      maxRows: 4,
      fields: [
        {
          name: 'position',
          type: 'select',
          defaultValue: 'topLeft',
          label: 'Pozycja',
          options: [
            {
              label: 'Lewy górny róg',
              value: 'topLeft',
            },
            {
              label: 'Prawy górny róg',
              value: 'topRight',
            },
            {
              label: 'Lewy dolny róg',
              value: 'bottomLeft',
            },
            {
              label: 'Prawy dolny róg',
              value: 'bottomRight',
            },
          ],
        },
        {
          name: 'additionalImage',
          label: 'Obrazek',
          type: 'upload',
          relationTo: 'media',
        },
      ],
      admin: {
        condition: (_, { enableAdditionalImages } = {}) => enableAdditionalImages,
      },
    },
  ],
}
