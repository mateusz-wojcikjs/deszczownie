/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-use-before-define
import React from 'react'
import ElementButton from '@payloadcms/richtext-slate/dist/field/elements/Button'

import Icon from '../Icon'

const baseClass = 'rich-text-table-button'

const ToolbarButton: React.FC<{ path: string }> = () => (
  <ElementButton className={baseClass} format="table-row">
    <Icon />
  </ElementButton>
)

export default ToolbarButton
