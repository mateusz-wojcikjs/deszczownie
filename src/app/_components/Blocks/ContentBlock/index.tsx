import React, { Fragment } from 'react'
import { Media } from 'app/_components/Media'
import { RichText } from 'app/_components/RichText'
import clsx from 'clsx'

import { isMedia } from '../../../typeGuards'
import { ContentBlockItem, ContentBlockProps } from '../types'

const ContentBlock: React.FC<ContentBlockProps> = ({ content, isHalfWidth }) => {
  const containerClass = clsx({
    ['md:flex-row-reverse']: content[0].blockType === 'textBlock',
    ['md:flex-row']: content[1].blockType === 'textBlock',
  })
  if (!isHalfWidth) {
    return (
      <section className="container">
        <div className="flex flex-col lg:flex-row gap-y-12 gap-x-8">
          {content.map((item: ContentBlockItem) => (
            <div key={item.id} className="lg:basis-1/2 relative overflow-hidden">
              {'richText' in item && (
                <RichText className="prose lg:prose-xl max-w-none" content={item.richText} />
              )}
              {'media' in item && isMedia(item.media) && (
                <Media className="min-h-96" resource={item.media} fill priority />
              )}
            </div>
          ))}
        </div>
      </section>
    )
  } else {
    return (
      <section className="overflow-hidden">
        <div className="lg:pb-24 pt-6 md:pt-12">
          <div className={clsx('relative flex flex-col md:items-center', containerClass)}>
            {content.map((item: ContentBlockItem, index: number) => {
              const classes = clsx({
                ['md:justify-end']: index === 1 && item.blockType,
              })
              return (
                <Fragment key={item.id}>
                  {'richText' in item && (
                    <div
                      className={clsx(
                        'container flex md:absolute md:left-1/2 md:-translate-x-1/2',
                        classes,
                      )}
                    >
                      <div className="reveal-left md:basis-1/3">
                        <div className="mb-4 lg:mr-12">
                          <RichText
                            className="prose lg:prose-xl max-w-none"
                            content={item.richText}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {'media' in item && (
                    <div className="mb-12 overflow-hidden px-4 md:mb-0 md:basis-6/12 md:px-0 md:pl-8 relative z-10">
                      {isMedia(item.media) && (
                        <Media
                          className="min-h-[50vh] reveal-right w-full max-w-full object-cover md:max-w-[50vw] 2xl:ml-auto 2xl:max-h-[960px]"
                          resource={item.media}
                          fill
                          priority
                        />
                      )}
                    </div>
                  )}
                </Fragment>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
export default ContentBlock
