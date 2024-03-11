import path from 'path'
import type { Payload } from 'payload'

import type { Category, Media } from '../payload-types'
import * as Categories from './collections/categories'
import * as Pages from './collections/pages'
import { basicImg, slider } from './media'

export const seed = async (payload: Payload): Promise<void> => {
  payload.logger.info('Seeding data...')
  // create admin
  await payload.create({
    collection: 'users',
    data: {
      email: 'demo@payloadcms.com',
      password: 'demo123',
    },
  })

  payload.logger.info(`— Seeding media...`)

  const [sliderImgDoc, basicImgDoc]: Media[] = await Promise.all([
    await payload.create({
      collection: 'media',
      data: slider,
      filePath: path.resolve(__dirname, 'slider.jpg'),
    }),
    await payload.create({
      collection: 'media',
      data: basicImg,
      filePath: path.resolve(__dirname, 'about-bg-2.jpg'),
    }),
  ])

  payload.logger.info(`— Seeding categories...`)

  const [category2Doc]: Category[] = await Promise.all([
    await payload.create({
      collection: 'categories',
      data: Categories.category1,
    }),
    await payload.create({
      collection: 'categories',
      data: Categories.category2,
    }),
  ])

  payload.logger.info(`— Seeding home page...`)

  await payload.create({
    collection: 'pages',
    data: JSON.parse(
      JSON.stringify({ ...Pages.homePage, categories: [] })
        .replace(/\{\{HERO_BG\}\}/g, String(sliderImgDoc.id))
        .replace(/\{\{IMAGE_1\}\}/g, String(basicImgDoc.id))
        .replace(/\{\{PROJECTS_PAGE_ID\}\}/g, String(category2Doc.id)),
    ),
  })
}
