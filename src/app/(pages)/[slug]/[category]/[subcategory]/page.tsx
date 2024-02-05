import React, { ReactElement } from 'react'
import Hero from 'app/_components/Hero'
import { CategoryDataInterface, SubcategoryPageProps } from 'app/types'
import { getPayloadClient } from 'getPayload'
import { notFound } from 'next/navigation'
import { Payload } from 'payload'
import { PaginatedDocs } from 'payload/database'
import { Category } from 'payload-types'

export default async function SubcategoryPage({
  params: { subcategory, category },
}: SubcategoryPageProps): Promise<ReactElement> {
  const payload: Payload = await getPayloadClient()
  const { docs }: PaginatedDocs<Category> = await payload.find({
    collection: 'categories',
    where: {
      slug: {
        equals: subcategory,
      },
    },
  })

  const categoryData: Category = docs?.[0]
  const { title, media, parentCategory }: CategoryDataInterface = categoryData

  if (!categoryData.parentCategory) return

  if (
    typeof parentCategory === 'object' &&
    parentCategory !== null &&
    parentCategory.slug !== category
  ) {
    return notFound()
  }

  return (
    <>
      <Hero title={title} type="lowImpact" media={media} />
      <div className="bg-secondary">
        <div className="container text-gray-200 uppercase text-xl text-center py-2">
          oferta / {title}
        </div>
      </div>
    </>
  )
}
