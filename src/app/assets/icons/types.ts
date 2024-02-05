export type IconProps = {
  color?: string
  secondaryColor?: string
  size?: number | string
  title?: string
} & React.SVGAttributes<SVGElement>

export type IconComponentProps = {
  name: IconName
} & IconProps

export type IconName = 'arrow-right'
