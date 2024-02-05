import React, { FC } from 'react'
import { HeaderHeroProps } from 'app/_components/Hero/types'
import { Media } from 'app/_components/Media'
import { isMedia } from 'app/typeGuards'

export const HeaderHero: FC<HeaderHeroProps> = ({
  title,
  media,
}: HeaderHeroProps): React.ReactElement => {
  return (
    <header className="relative min-h-[33vh] [clip-path:inset(0_0_0_0)] ">
      <div className="bg-black h-full w-full fixed top-0 left-0">
        {isMedia(media) && <Media className="" resource={media} fill priority />}
      </div>
      <div className="w-full h-full flex items-center relative min-h-[33vh]">
        <div className="absolute top-0 left-0 bg-black w-full h-full z-0 opacity-60"></div>
        <div className="container relative flex flex-col gap-4">
          <h1 className="text-5xl text-white-main text-shadow-base">{title}</h1>
        </div>
      </div>
    </header>
  )
}
