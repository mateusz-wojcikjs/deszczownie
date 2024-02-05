import type { GlobalConfig } from 'payload/types'

const Logo: GlobalConfig = {
  slug: 'site-logo',
  label: 'Logo strony',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default Logo
