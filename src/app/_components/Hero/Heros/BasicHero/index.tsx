import React, { FC } from 'react'
import { BasicHeroProps } from 'app/_components/Hero/types'
import { RichText } from 'app/_components/RichText'

export const BasicHero: FC<BasicHeroProps> = ({
  title,
  richText,
}: BasicHeroProps): React.ReactElement => {
  return (
    <header className="relative">
      <div className="container min-h-[25vh] flex flex-col gap-12 items-center justify-center">
        <h1 className="text-5xl font-bold uppercase text-secondary">{title}</h1>
        {richText && (
          <RichText
            className="text-secondary text-lg prose lg:prose-xl prose-zinc text-center"
            content={richText}
          />
        )}
      </div>
    </header>
  )
}
