import React, { Fragment, ReactElement } from 'react'
import Blocks from 'app/_components/Blocks'
import Hero from 'app/_components/Hero'
import { PageProps } from 'app/types'
import { getPayloadClient } from 'getPayload'
import { notFound } from 'next/navigation'
import { Payload } from 'payload'
import { PaginatedDocs } from 'payload/database'
import { Page } from 'payload-types'

export default async function Page({ params: { slug } }: PageProps): Promise<ReactElement> {
  const payload: Payload = await getPayloadClient()
  const { docs }: PaginatedDocs<Page> = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const page: Page = docs?.[0]

  if (!page) {
    return notFound()
  }

  return (
    <Fragment>
      <Hero
        media={page.hero.media}
        richText={page.hero.richText}
        type={page.hero.type}
        title={page.hero.title}
        links={page.hero.links}
      />
      <div className="bg-secondary">
        <div className="container text-gray-200 uppercase text-xl text-center py-2">
          Strona główna / {page.title}
        </div>
      </div>
      <main className="">
        <Blocks blocks={page.layout} />
      </main>
    </Fragment>
  )
}
