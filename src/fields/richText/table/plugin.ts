import type { RichTextCustomElement } from '@payloadcms/richtext-slate/dist/types'
import type { BaseEditor } from 'slate'
import { Editor, Element as SlateElement, Point, Range } from 'slate'

type RichTextPlugin = Exclude<RichTextCustomElement['plugins'], undefined>[0]

const withTable: RichTextPlugin = incomingEditor => {
  const editor: BaseEditor & {
    shouldBreakOutOnEnter?: (element: any) => boolean // eslint-disable-line @typescript-eslint/no-explicit-any
  } = incomingEditor

  const { shouldBreakOutOnEnter, deleteBackward, deleteForward, insertBreak } = editor

  editor.deleteBackward = unit => {
    const { selection } = editor

    if (selection && Range.isCollapsed(selection)) {
      // @ts-ignore
      const [cell] = Editor.nodes(editor, {
        // @ts-ignore
        match: n => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'table-cell',
      })

      if (cell) {
        const [, cellPath] = cell
        const start = Editor.start(editor, cellPath)

        if (Point.equals(selection.anchor, start)) {
          return
        }
      }
    }

    deleteBackward(unit)
  }

  editor.deleteForward = unit => {
    const { selection } = editor

    if (selection && Range.isCollapsed(selection)) {
      // @ts-ignore
      const [cell] = Editor.nodes(editor, {
        // @ts-ignore
        match: n => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'table-cell',
      })

      if (cell) {
        const [, cellPath] = cell
        const end = Editor.end(editor, cellPath)

        if (Point.equals(selection.anchor, end)) {
          return
        }
      }
    }

    deleteForward(unit)
  }

  editor.insertBreak = () => {
    const { selection } = editor

    if (selection) {
      // @ts-ignore
      const [table] = Editor.nodes(editor, {
        // @ts-ignore
        match: n => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'table',
      })

      if (table) {
        return
      }
    }

    insertBreak()
  }

  if (shouldBreakOutOnEnter) {
    editor.shouldBreakOutOnEnter = element =>
      element.type === 'large-body' ? true : shouldBreakOutOnEnter(element)
  }

  return editor
}

export default withTable
