import type { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'updatedAt',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}

export default Users
