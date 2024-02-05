import { webpackBundler } from '@payloadcms/bundler-webpack'
import { postgresAdapter } from '@payloadcms/db-postgres'
import seo from '@payloadcms/plugin-seo'
import { slateEditor } from '@payloadcms/richtext-slate'
import dotenv from 'dotenv'
import path from 'path'
import { buildConfig } from 'payload/config'

import Categories from './collections/Categories'
import Media from './collections/Media'
import Pages from './collections/Pages'
import Portfolio from './collections/Portfolio'
import Products from './collections/Products'
import Users from './collections/Users'
import Favicon from './globals/Favicon'
import Logo from './globals/Logo'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  collections: [Users, Pages, Media, Portfolio, Categories, Products],
  globals: [Logo, Favicon],
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  plugins: [
    seo({
      collections: ['pages', 'categories'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }: any) => `Deszczownie.pl — ${doc?.title.value}`,
      generateDescription: ({ doc }: any) => doc?.excerpt,
    }),
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
