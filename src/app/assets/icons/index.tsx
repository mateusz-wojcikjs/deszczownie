import { type FC, lazy } from 'react'

import { IconComponentProps, IconName } from './types'

const IconComponents: Record<IconName, FC<IconComponentProps>> = {
  'arrow-right': lazy(() => import('./arrow-right')),
}

export const CUSTOM_ICONS_ARRAY = Object.keys(IconComponents)

export const Icon: FC<IconComponentProps> = props => {
  const IconComponent = IconComponents[props.name]

  return <IconComponent {...props} />
}
