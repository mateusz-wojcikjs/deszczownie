import type { Category, Media } from '../../payload-types'

export interface PageParams {
  slug: string
}

export interface CategoryParams {
  category: string
}

export interface SubcategoryParams {
  subcategory: string
}

export interface PageProps {
  params: PageParams
}

export interface CategoryPageProps {
  params: CategoryParams
}

export interface SubcategoryPageProps {
  params: CategoryParams & SubcategoryParams
}

export interface CategoryDataInterface {
  title: string
  media?: Media | number
  parentCategory?: Category | number
}
