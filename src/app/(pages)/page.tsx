import React, { Fragment, ReactElement } from 'react'
import Blocks from 'app/_components/Blocks'
import Hero from 'app/_components/Hero'
import { getPayloadClient } from 'getPayload'
import { notFound } from 'next/navigation'
import { Payload } from 'payload'
import { PaginatedDocs } from 'payload/database'
import { Page } from 'payload-types'

export default async function HomePage(): Promise<ReactElement> {
  const payload: Payload = await getPayloadClient()
  const { docs }: PaginatedDocs<Page> = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
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
      <main className="">
        <Blocks blocks={page.layout} />
      </main>
    </Fragment>
  )
}
