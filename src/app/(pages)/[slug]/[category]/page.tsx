import React, { ReactElement } from 'react'
import Blocks from 'app/_components/Blocks'
import Hero from 'app/_components/Hero'
import { CategoryPageProps } from 'app/types'
import { getPayloadClient } from 'getPayload'
import { notFound } from 'next/navigation'
import { Payload } from 'payload'
import { PaginatedDocs } from 'payload/database'
import { Category } from 'payload-types'

export default async function CategoryPage({
  params: { category },
}: CategoryPageProps): Promise<ReactElement> {
  const payload: Payload = await getPayloadClient()
  const { docs }: PaginatedDocs<Category> = await payload.find({
    collection: 'categories',
    where: {
      slug: {
        equals: category,
      },
    },
  })

  const categoryData: Category = docs?.[0]
  const { title, media } = categoryData

  if (categoryData.parentCategory) {
    return notFound()
  }

  return (
    <>
      <Hero type="lowImpact" title={title} media={media} />
      <div className="bg-secondary">
        <div className="container text-gray-200 uppercase text-xl text-center py-2">
          oferta / {title}
        </div>
      </div>
      <main className="">
        <Blocks blocks={categoryData.layout} />
      </main>
    </>
  )
}
