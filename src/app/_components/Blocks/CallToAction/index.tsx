import React from 'react'
import Button from 'app/_components/button'
import { Media } from 'app/_components/Media'
import { RichText } from 'app/_components/RichText'
import { Icon } from 'app/assets/icons'
import { isMedia } from 'app/typeGuards'

import { CTAProps } from '../types'

const CallToActionBlock: React.FC<CTAProps> = ({
  media,
  richText,
  links,
}: CTAProps): React.ReactElement => {
  return (
    <div className="relative min-h-[33vh]">
      <div className="bg-black absolute top-0 h-full w-full">
        {isMedia(media) && <Media className="" resource={media} fill priority />}
      </div>
      <div className="w-full h-full flex items-center relative min-h-[33vh]">
        <div className="absolute top-0 left-0 bg-secondary w-full h-full z-0 opacity-90"></div>
        <div className="container relative flex flex-col lg:flex-row items-center gap-y-12">
          <div className="basis-1/2">
            <RichText
              className="max-w-none text-2xl lg:text-4xl lg:leading-normal text-white-main font-semibold text-center lg:text-left"
              content={richText}
            />
          </div>
          <div className="basis-1/2">
            <div className="flex gap-6 flex-wrap justify-center">
              {links.map(({ link, id }) => (
                <Button key={id} isBlank={link.newTab} href={link.url} variant={link.appearance}>
                  {link.label} {link.icon && <Icon name="arrow-right" />}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToActionBlock
