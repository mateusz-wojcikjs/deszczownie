import type { Category, Media } from 'payload-types'

export const isMedia = (media: number | Media): media is Media => (media as Media).url !== undefined
export const isSubcategory = (category: number | Category): category is Category => {
  const subcategory = category as Category

  return typeof subcategory === 'object' && subcategory !== null
}
