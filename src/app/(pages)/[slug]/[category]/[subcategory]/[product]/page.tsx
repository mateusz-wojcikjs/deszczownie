import React, { ReactElement } from 'react'
import Hero from 'app/_components/Hero'
import { getPayloadClient } from 'getPayload'
import { notFound } from 'next/navigation'
import { Payload } from 'payload'
import { PaginatedDocs } from 'payload/database'
import { Product } from 'payload-types'

export default async function ProductPage({
  params: { subcategory, category, product },
}): Promise<ReactElement> {
  const payload: Payload = await getPayloadClient()
  const { docs }: PaginatedDocs<Product> = await payload.find({
    collection: 'product',
    where: {
      slug: {
        equals: product,
      },
    },
  })

  const productData: Product = docs?.[0]
  const { title, media, category: subcategoryData } = productData

  if (
    typeof subcategoryData === 'object' &&
    subcategoryData !== null &&
    subcategoryData.slug !== subcategory
  ) {
    if (
      typeof subcategoryData.parentCategory === 'object' &&
      subcategoryData.parentCategory !== null &&
      subcategoryData.parentCategory.slug !== category
    ) {
      return notFound()
    }
    return notFound()
  }

  if (!productData) {
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
