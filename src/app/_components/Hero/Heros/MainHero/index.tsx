import React, { FC } from 'react'
import Button from 'app/_components/button'
import { Link, MainHeroProps } from 'app/_components/Hero/types'
import { Media } from 'app/_components/Media'
import { RichText } from 'app/_components/RichText'
import { Icon } from 'app/assets/icons'
import { isMedia } from 'app/typeGuards'

export const MainHero: FC<MainHeroProps> = ({
  title,
  richText,
  media,
  links,
}: MainHeroProps): React.ReactElement => {
  return (
    <header className="relative min-h-[80vh] [clip-path:inset(0_0_0_0)] ">
      <div className="bg-black h-full w-full fixed top-0 left-0">
        {isMedia(media) && <Media className="" resource={media} fill priority />}
      </div>
      <div className="w-full h-full flex items-center relative min-h-[80vh]">
        <div className="absolute top-0 left-0 bg-black w-full h-full z-0 opacity-40"></div>
        <div className="container relative flex flex-col gap-4">
          <h1 className="text-5xl text-white-main text-shadow-base">{title}</h1>
          <RichText
            className="text-white-main text-lg text-shadow-base prose lg:prose-xl prose-zinc"
            content={richText}
          />
          <div className="flex gap-6 flex-wrap">
            {links.map(
              ({ link, id }: { link: Link; id: string }): React.ReactElement => (
                <Button key={id} isBlank={link.newTab} href={link.url} variant={link.appearance}>
                  {link.label} {link.icon && <Icon name="arrow-right" />}
                </Button>
              ),
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
