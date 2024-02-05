import { RichTextLeaf } from '@payloadcms/richtext-slate/dist/types'

interface RichTextLeafProps {
  leaf: RichTextLeaf
  attributes?: string
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  return <span {...attributes}>{children}</span>
}

export default Leaf
