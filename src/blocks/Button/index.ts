import type { Block } from 'payload/types'

export const Button: Block = {
  slug: 'button',
  fields: [
    {
      name: 'label',
      type: 'text',
      label: 'Tekst',
    },
    {
      name: 'link',
      type: 'relationship',
      label: 'Odnośnik do strony',
      relationTo: 'pages',
    },
  ],
  labels: {
    singular: 'Przycisk z linkiem',
    plural: 'Przyciski z linkami',
  },
}
