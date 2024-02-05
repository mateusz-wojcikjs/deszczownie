import type { GlobalConfig } from 'payload/types'

const Favicon: GlobalConfig = {
  slug: 'site-favicon',
  label: 'Ikona strony',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default Favicon
