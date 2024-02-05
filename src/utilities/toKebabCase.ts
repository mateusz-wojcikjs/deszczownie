type ToKebabCaseType = (s: string) => string

export const toKebabCase: ToKebabCaseType = (string: string): string =>
  string
    ?.replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
