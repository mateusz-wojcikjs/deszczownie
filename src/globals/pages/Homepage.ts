import type { GlobalConfig } from 'payload/types'

const Homepage: GlobalConfig = {
  slug: 'homepage',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Nagłówek',
      required: true,
      minLength: 10,
    },
    {
      name: 'subtitle',
      label: 'Opis pod nagłówkiem',
      type: 'text',
    },
  ],
}

export default Homepage
