import type { Field } from 'payload/types'

export const header: Field = {
  name: 'header',
  type: 'select',
  label: 'rodzaj headera',
  required: true,
  defaultValue: 'lowImpact',
  options: [
    {
      label: 'Slider hero',
      value: 'highImpact',
    },
    {
      label: 'Zwykłe hero',
      value: 'lowImpact',
    },
  ],
}
